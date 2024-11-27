// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("User", id.toString(), this);
    }
  }

  static loadInBlock(id: string): User | null {
    return changetype<User | null>(store.get_in_block("User", id));
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalLocked(): BigInt {
    let value = this.get("totalLocked");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalLocked(value: BigInt) {
    this.set("totalLocked", Value.fromBigInt(value));
  }

  get lockHistory(): LockEventLoader {
    return new LockEventLoader(
      "User",
      this.get("id")!.toString(),
      "lockHistory",
    );
  }

  get unlockHistory(): UnlockEventLoader {
    return new UnlockEventLoader(
      "User",
      this.get("id")!.toString(),
      "unlockHistory",
    );
  }

  get sentHistory(): OFTSentEventLoader {
    return new OFTSentEventLoader(
      "User",
      this.get("id")!.toString(),
      "sentHistory",
    );
  }

  get receivedHistory(): OFTReceivedEventLoader {
    return new OFTReceivedEventLoader(
      "User",
      this.get("id")!.toString(),
      "receivedHistory",
    );
  }
}

export class LockEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LockEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LockEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("LockEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): LockEvent | null {
    return changetype<LockEvent | null>(store.get_in_block("LockEvent", id));
  }

  static load(id: string): LockEvent | null {
    return changetype<LockEvent | null>(store.get("LockEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }
}

export class UnlockEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UnlockEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UnlockEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("UnlockEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): UnlockEvent | null {
    return changetype<UnlockEvent | null>(
      store.get_in_block("UnlockEvent", id),
    );
  }

  static load(id: string): UnlockEvent | null {
    return changetype<UnlockEvent | null>(store.get("UnlockEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }
}

export class OFTSentEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OFTSentEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type OFTSentEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("OFTSentEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): OFTSentEvent | null {
    return changetype<OFTSentEvent | null>(
      store.get_in_block("OFTSentEvent", id),
    );
  }

  static load(id: string): OFTSentEvent | null {
    return changetype<OFTSentEvent | null>(store.get("OFTSentEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get guid(): Bytes {
    let value = this.get("guid");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set guid(value: Bytes) {
    this.set("guid", Value.fromBytes(value));
  }

  get dstChainId(): BigInt {
    let value = this.get("dstChainId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set dstChainId(value: BigInt) {
    this.set("dstChainId", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get actualAmount(): BigInt {
    let value = this.get("actualAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set actualAmount(value: BigInt) {
    this.set("actualAmount", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }
}

export class OFTReceivedEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OFTReceivedEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type OFTReceivedEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("OFTReceivedEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): OFTReceivedEvent | null {
    return changetype<OFTReceivedEvent | null>(
      store.get_in_block("OFTReceivedEvent", id),
    );
  }

  static load(id: string): OFTReceivedEvent | null {
    return changetype<OFTReceivedEvent | null>(
      store.get("OFTReceivedEvent", id),
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get guid(): Bytes {
    let value = this.get("guid");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set guid(value: Bytes) {
    this.set("guid", Value.fromBytes(value));
  }

  get srcChainId(): BigInt {
    let value = this.get("srcChainId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set srcChainId(value: BigInt) {
    this.set("srcChainId", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }
}

export class GlobalStat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save GlobalStat entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type GlobalStat must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("GlobalStat", id.toString(), this);
    }
  }

  static loadInBlock(id: string): GlobalStat | null {
    return changetype<GlobalStat | null>(store.get_in_block("GlobalStat", id));
  }

  static load(id: string): GlobalStat | null {
    return changetype<GlobalStat | null>(store.get("GlobalStat", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalLocked(): BigInt {
    let value = this.get("totalLocked");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalLocked(value: BigInt) {
    this.set("totalLocked", Value.fromBigInt(value));
  }

  get userCount(): BigInt {
    let value = this.get("userCount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set userCount(value: BigInt) {
    this.set("userCount", Value.fromBigInt(value));
  }
}

export class LockEventLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): LockEvent[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<LockEvent[]>(value);
  }
}

export class UnlockEventLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): UnlockEvent[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<UnlockEvent[]>(value);
  }
}

export class OFTSentEventLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): OFTSentEvent[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<OFTSentEvent[]>(value);
  }
}

export class OFTReceivedEventLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): OFTReceivedEvent[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<OFTReceivedEvent[]>(value);
  }
}
