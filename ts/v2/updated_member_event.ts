/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  MembershipType,
  MembershipStatus,
  membershipTypeFromJSON,
  membershipStatusFromJSON,
  membershipTypeToJSON,
  membershipStatusToJSON,
} from "../v2/members";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "uptown_runners.events.v2";

export interface Member {
  memberId: number;
  userId: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  nationalIdentifier: string;
  email: string;
  renewedDate: Date | undefined;
  overrideExpirationDate: Date | undefined;
  membershipType: MembershipType;
  status: MembershipStatus;
}

export interface UpdateMemberEvent {
  before: Member | undefined;
  after: Member | undefined;
}

function createBaseMember(): Member {
  return {
    memberId: 0,
    userId: "",
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    nationalIdentifier: "",
    email: "",
    renewedDate: undefined,
    overrideExpirationDate: undefined,
    membershipType: 0,
    status: 0,
  };
}

export const Member = {
  encode(
    message: Member,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.memberId !== 0) {
      writer.uint32(8).int64(message.memberId);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.firstName !== "") {
      writer.uint32(26).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(34).string(message.lastName);
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    if (message.phoneNumber !== "") {
      writer.uint32(50).string(message.phoneNumber);
    }
    if (message.nationalIdentifier !== "") {
      writer.uint32(58).string(message.nationalIdentifier);
    }
    if (message.email !== "") {
      writer.uint32(66).string(message.email);
    }
    if (message.renewedDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.renewedDate),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.overrideExpirationDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.overrideExpirationDate),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.membershipType !== 0) {
      writer.uint32(88).int32(message.membershipType);
    }
    if (message.status !== 0) {
      writer.uint32(96).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.userId = reader.string();
          break;
        case 3:
          message.firstName = reader.string();
          break;
        case 4:
          message.lastName = reader.string();
          break;
        case 5:
          message.address = reader.string();
          break;
        case 6:
          message.phoneNumber = reader.string();
          break;
        case 7:
          message.nationalIdentifier = reader.string();
          break;
        case 8:
          message.email = reader.string();
          break;
        case 9:
          message.renewedDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.overrideExpirationDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.membershipType = reader.int32() as any;
          break;
        case 12:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Member {
    return {
      memberId: isSet(object.memberId) ? Number(object.memberId) : 0,
      userId: isSet(object.userId) ? String(object.userId) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      address: isSet(object.address) ? String(object.address) : "",
      phoneNumber: isSet(object.phoneNumber) ? String(object.phoneNumber) : "",
      nationalIdentifier: isSet(object.nationalIdentifier)
        ? String(object.nationalIdentifier)
        : "",
      email: isSet(object.email) ? String(object.email) : "",
      renewedDate: isSet(object.renewedDate)
        ? fromJsonTimestamp(object.renewedDate)
        : undefined,
      overrideExpirationDate: isSet(object.overrideExpirationDate)
        ? fromJsonTimestamp(object.overrideExpirationDate)
        : undefined,
      membershipType: isSet(object.membershipType)
        ? membershipTypeFromJSON(object.membershipType)
        : 0,
      status: isSet(object.status)
        ? membershipStatusFromJSON(object.status)
        : 0,
    };
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.memberId !== undefined &&
      (obj.memberId = Math.round(message.memberId));
    message.userId !== undefined && (obj.userId = message.userId);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.address !== undefined && (obj.address = message.address);
    message.phoneNumber !== undefined &&
      (obj.phoneNumber = message.phoneNumber);
    message.nationalIdentifier !== undefined &&
      (obj.nationalIdentifier = message.nationalIdentifier);
    message.email !== undefined && (obj.email = message.email);
    message.renewedDate !== undefined &&
      (obj.renewedDate = message.renewedDate.toISOString());
    message.overrideExpirationDate !== undefined &&
      (obj.overrideExpirationDate =
        message.overrideExpirationDate.toISOString());
    message.membershipType !== undefined &&
      (obj.membershipType = membershipTypeToJSON(message.membershipType));
    message.status !== undefined &&
      (obj.status = membershipStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Member>, I>>(object: I): Member {
    const message = createBaseMember();
    message.memberId = object.memberId ?? 0;
    message.userId = object.userId ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.address = object.address ?? "";
    message.phoneNumber = object.phoneNumber ?? "";
    message.nationalIdentifier = object.nationalIdentifier ?? "";
    message.email = object.email ?? "";
    message.renewedDate = object.renewedDate ?? undefined;
    message.overrideExpirationDate = object.overrideExpirationDate ?? undefined;
    message.membershipType = object.membershipType ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseUpdateMemberEvent(): UpdateMemberEvent {
  return { before: undefined, after: undefined };
}

export const UpdateMemberEvent = {
  encode(
    message: UpdateMemberEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.before !== undefined) {
      Member.encode(message.before, writer.uint32(10).fork()).ldelim();
    }
    if (message.after !== undefined) {
      Member.encode(message.after, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMemberEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMemberEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.before = Member.decode(reader, reader.uint32());
          break;
        case 2:
          message.after = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateMemberEvent {
    return {
      before: isSet(object.before) ? Member.fromJSON(object.before) : undefined,
      after: isSet(object.after) ? Member.fromJSON(object.after) : undefined,
    };
  },

  toJSON(message: UpdateMemberEvent): unknown {
    const obj: any = {};
    message.before !== undefined &&
      (obj.before = message.before ? Member.toJSON(message.before) : undefined);
    message.after !== undefined &&
      (obj.after = message.after ? Member.toJSON(message.after) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMemberEvent>, I>>(
    object: I
  ): UpdateMemberEvent {
    const message = createBaseUpdateMemberEvent();
    message.before =
      object.before !== undefined && object.before !== null
        ? Member.fromPartial(object.before)
        : undefined;
    message.after =
      object.after !== undefined && object.after !== null
        ? Member.fromPartial(object.after)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
