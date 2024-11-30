import * as fs from 'fs'
import * as path from 'path'

import { BigNumber } from 'ethers'
import hre, { ethers } from 'hardhat'

async function main() {
    const [deployer] = await ethers.getSigners()
    const deployerAddr = await deployer.getAddress()
    console.log('deployerAddr :', deployerAddr)

    const eidA = 1
    const eidB = 2

    const EndpointV2Mock = await ethers.getContractFactory('EndpointV2Mock')
    const ERC20Mock = await ethers.getContractFactory('DogecoinMock')
    const DogeLock = await ethers.getContractFactory('DogeLockUpgradeable')
    const MyOFTAdapter = await ethers.getContractFactory('MyOFTAdapter')

    // chain A:
    const tokenA = await ERC20Mock.deploy('Token', 'TOKEN', { gasLimit: 5000000 })
    const mockEndpointV2A = await EndpointV2Mock.deploy(eidA, { gasLimit: 5000000 })
    const dogeLock = await DogeLock.deploy(tokenA.address, mockEndpointV2A.address, BigNumber.from(0), {
        gasLimit: 5000000,
    })

    // chain B:
    const tokenB = await ERC20Mock.deploy('Token', 'TOKEN', { gasLimit: 5000000 })
    const mockEndpointV2B = await EndpointV2Mock.deploy(eidB, { gasLimit: 5000000 })
    const myOFTAdapter = await MyOFTAdapter.deploy(tokenB.address, mockEndpointV2A.address, deployerAddr, {
        gasLimit: 5000000,
    })

    // @dev Test Only: Setting destination endpoints in the LZEndpoint mock for each MyOFT instance
    await mockEndpointV2A.setDestLzEndpoint(myOFTAdapter.address, mockEndpointV2B.address)
    await mockEndpointV2B.setDestLzEndpoint(dogeLock.address, mockEndpointV2A.address)

    await dogeLock.initialize(deployerAddr)
    await dogeLock.setPeer(eidB, ethers.utils.zeroPad(myOFTAdapter.address, 32), { gasLimit: 500000 })
    await myOFTAdapter.setPeer(eidA, ethers.utils.zeroPad(dogeLock.address, 32), { gasLimit: 500000 })

    await tokenA.mint(deployerAddr, ethers.utils.parseUnits('100000000', 8))

    console.log('-----Chain A-----')
    console.log('Mock TokenA:', tokenA.address)
    console.log('Mock EndpointA:', mockEndpointV2A.address)
    console.log('Doge Lock:', dogeLock.address)
    console.log('-----Chain B-----')
    console.log('Mock TokenA:', tokenB.address)
    console.log('Mock EndpointA:', mockEndpointV2B.address)
    console.log('Doge Lock:', myOFTAdapter.address)

    // Save deployment info for subgraph
    const deploymentInfo = {
        DogeLock: dogeLock.address,
        Token: tokenA.address,
        EndpointV2: mockEndpointV2A.address,
        blockNumber: (await ethers.provider.getBlock('latest')).number,
    }

    const network = hre.network.name

    const fileName = `${network}.json`
    const filePath = path.join(__dirname, '../subgraph', fileName)

    fs.writeFileSync(filePath, JSON.stringify(deploymentInfo, null, 2))
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
