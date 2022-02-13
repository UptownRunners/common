/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Member } from "../v2/members";

export const protobufPackage = "uptown_runners.events.v2";

export interface UpdateMemberEvent {
  before: Member | undefined;
  after: Member | undefined;
}

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
