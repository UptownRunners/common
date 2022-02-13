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
  member_id: number;
  user_id: string;
  first_name: string;
  last_name: string;
  address: string;
  phone_number: string;
  national_identifier: string;
  email: string;
  renewed_date: Timestamp | undefined;
  override_expiration_date: Timestamp | undefined;
  membership_type: MembershipType;
  status: MembershipStatus;
}

export interface UpdateMemberEvent {
  before: Member | undefined;
  after: Member | undefined;
}

function createBaseMember(): Member {
  return {
    member_id: 0,
    user_id: "",
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
    national_identifier: "",
    email: "",
    renewed_date: undefined,
    override_expiration_date: undefined,
    membership_type: 0,
    status: 0,
  };
}

export const Member = {
  encode(
    message: Member,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.member_id !== 0) {
      writer.uint32(8).int64(message.member_id);
    }
    if (message.user_id !== "") {
      writer.uint32(18).string(message.user_id);
    }
    if (message.first_name !== "") {
      writer.uint32(26).string(message.first_name);
    }
    if (message.last_name !== "") {
      writer.uint32(34).string(message.last_name);
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    if (message.phone_number !== "") {
      writer.uint32(50).string(message.phone_number);
    }
    if (message.national_identifier !== "") {
      writer.uint32(58).string(message.national_identifier);
    }
    if (message.email !== "") {
      writer.uint32(66).string(message.email);
    }
    if (message.renewed_date !== undefined) {
      Timestamp.encode(message.renewed_date, writer.uint32(74).fork()).ldelim();
    }
    if (message.override_expiration_date !== undefined) {
      Timestamp.encode(
        message.override_expiration_date,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.membership_type !== 0) {
      writer.uint32(88).int32(message.membership_type);
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
          message.member_id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.user_id = reader.string();
          break;
        case 3:
          message.first_name = reader.string();
          break;
        case 4:
          message.last_name = reader.string();
          break;
        case 5:
          message.address = reader.string();
          break;
        case 6:
          message.phone_number = reader.string();
          break;
        case 7:
          message.national_identifier = reader.string();
          break;
        case 8:
          message.email = reader.string();
          break;
        case 9:
          message.renewed_date = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.override_expiration_date = Timestamp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.membership_type = reader.int32() as any;
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
      member_id: isSet(object.member_id) ? Number(object.member_id) : 0,
      user_id: isSet(object.user_id) ? String(object.user_id) : "",
      first_name: isSet(object.first_name) ? String(object.first_name) : "",
      last_name: isSet(object.last_name) ? String(object.last_name) : "",
      address: isSet(object.address) ? String(object.address) : "",
      phone_number: isSet(object.phone_number)
        ? String(object.phone_number)
        : "",
      national_identifier: isSet(object.national_identifier)
        ? String(object.national_identifier)
        : "",
      email: isSet(object.email) ? String(object.email) : "",
      renewed_date: isSet(object.renewed_date)
        ? fromJsonTimestamp(object.renewed_date)
        : undefined,
      override_expiration_date: isSet(object.override_expiration_date)
        ? fromJsonTimestamp(object.override_expiration_date)
        : undefined,
      membership_type: isSet(object.membership_type)
        ? membershipTypeFromJSON(object.membership_type)
        : 0,
      status: isSet(object.status)
        ? membershipStatusFromJSON(object.status)
        : 0,
    };
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.member_id !== undefined &&
      (obj.member_id = Math.round(message.member_id));
    message.user_id !== undefined && (obj.user_id = message.user_id);
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.address !== undefined && (obj.address = message.address);
    message.phone_number !== undefined &&
      (obj.phone_number = message.phone_number);
    message.national_identifier !== undefined &&
      (obj.national_identifier = message.national_identifier);
    message.email !== undefined && (obj.email = message.email);
    message.renewed_date !== undefined &&
      (obj.renewed_date = fromTimestamp(message.renewed_date).toISOString());
    message.override_expiration_date !== undefined &&
      (obj.override_expiration_date = fromTimestamp(
        message.override_expiration_date
      ).toISOString());
    message.membership_type !== undefined &&
      (obj.membership_type = membershipTypeToJSON(message.membership_type));
    message.status !== undefined &&
      (obj.status = membershipStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Member>, I>>(object: I): Member {
    const message = createBaseMember();
    message.member_id = object.member_id ?? 0;
    message.user_id = object.user_id ?? "";
    message.first_name = object.first_name ?? "";
    message.last_name = object.last_name ?? "";
    message.address = object.address ?? "";
    message.phone_number = object.phone_number ?? "";
    message.national_identifier = object.national_identifier ?? "";
    message.email = object.email ?? "";
    message.renewed_date =
      object.renewed_date !== undefined && object.renewed_date !== null
        ? Timestamp.fromPartial(object.renewed_date)
        : undefined;
    message.override_expiration_date =
      object.override_expiration_date !== undefined &&
      object.override_expiration_date !== null
        ? Timestamp.fromPartial(object.override_expiration_date)
        : undefined;
    message.membership_type = object.membership_type ?? 0;
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

function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === "string") {
    return toTimestamp(new Date(o));
  } else {
    return Timestamp.fromJSON(o);
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
