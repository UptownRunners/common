/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "uptown_runners.members.v2";

export enum MembershipType {
  FULL = 0,
  SUPPORT = 1,
  UNRECOGNIZED = -1,
}

export function membershipTypeFromJSON(object: any): MembershipType {
  switch (object) {
    case 0:
    case "FULL":
      return MembershipType.FULL;
    case 1:
    case "SUPPORT":
      return MembershipType.SUPPORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MembershipType.UNRECOGNIZED;
  }
}

export function membershipTypeToJSON(object: MembershipType): string {
  switch (object) {
    case MembershipType.FULL:
      return "FULL";
    case MembershipType.SUPPORT:
      return "SUPPORT";
    default:
      return "UNKNOWN";
  }
}

export enum MembershipStatus {
  ACTIVE = 0,
  INACTIVE = 1,
  UNRECOGNIZED = -1,
}

export function membershipStatusFromJSON(object: any): MembershipStatus {
  switch (object) {
    case 0:
    case "ACTIVE":
      return MembershipStatus.ACTIVE;
    case 1:
    case "INACTIVE":
      return MembershipStatus.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MembershipStatus.UNRECOGNIZED;
  }
}

export function membershipStatusToJSON(object: MembershipStatus): string {
  switch (object) {
    case MembershipStatus.ACTIVE:
      return "ACTIVE";
    case MembershipStatus.INACTIVE:
      return "INACTIVE";
    default:
      return "UNKNOWN";
  }
}

export interface GetMemberByIdRequest {
  id: number;
}

export interface GetMemberByEmailRequest {
  email: string;
}

export interface GetMemberByNationalIdentifierRequest {
  national_identifier: string;
}

export interface GetMembersRequest {
  skip?: number | undefined;
  take?: number | undefined;
}

export interface CreateMemberRequest {
  national_identifier: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  address: Address | undefined;
  membership_type: MembershipType;
  renewed_date: Timestamp | undefined;
  override_expiration_date: Timestamp | undefined;
}

export interface UpdateMemberRequest {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  address: Address | undefined;
  membership_type: MembershipType;
  renewed_date: Timestamp | undefined;
  override_expiration_date: Timestamp | undefined;
  deactivated: boolean;
}

export interface DeleteMemberRequest {
  member_id: number;
}

export interface UpdateStatusesRequest {}

export interface FindMembersRequest {
  search_value: string;
}

export interface Member {
  id: number;
  national_identifier: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  address: Address | undefined;
  membership_type: MembershipType;
  renewed_date: Timestamp | undefined;
  override_expiration_date: Timestamp | undefined;
  status: MembershipStatus;
  deactivated: boolean;
}

export interface Address {
  street: string;
  postal_code: string;
  city: string;
  country: string;
}

export interface GetMemberResponse {
  member: Member | undefined;
}

export interface UpdateMemberResponse {
  member: Member | undefined;
}

export interface CreateMemberResponse {
  member: Member | undefined;
}

export interface DeleteMemberResponse {
  member: Member | undefined;
}

export interface GetMembersResponse {
  members: Member[];
}

export interface UpdateStatusesResponse {
  success: boolean;
  error_message: string;
}

export interface FindMembersResponse {
  members: Member[];
}

function createBaseGetMemberByIdRequest(): GetMemberByIdRequest {
  return { id: 0 };
}

export const GetMemberByIdRequest = {
  encode(
    message: GetMemberByIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetMemberByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemberByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMemberByIdRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: GetMemberByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMemberByIdRequest>, I>>(
    object: I
  ): GetMemberByIdRequest {
    const message = createBaseGetMemberByIdRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetMemberByEmailRequest(): GetMemberByEmailRequest {
  return { email: "" };
}

export const GetMemberByEmailRequest = {
  encode(
    message: GetMemberByEmailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetMemberByEmailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemberByEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMemberByEmailRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: GetMemberByEmailRequest): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMemberByEmailRequest>, I>>(
    object: I
  ): GetMemberByEmailRequest {
    const message = createBaseGetMemberByEmailRequest();
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseGetMemberByNationalIdentifierRequest(): GetMemberByNationalIdentifierRequest {
  return { national_identifier: "" };
}

export const GetMemberByNationalIdentifierRequest = {
  encode(
    message: GetMemberByNationalIdentifierRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.national_identifier !== "") {
      writer.uint32(10).string(message.national_identifier);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetMemberByNationalIdentifierRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemberByNationalIdentifierRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.national_identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMemberByNationalIdentifierRequest {
    return {
      national_identifier: isSet(object.national_identifier)
        ? String(object.national_identifier)
        : "",
    };
  },

  toJSON(message: GetMemberByNationalIdentifierRequest): unknown {
    const obj: any = {};
    message.national_identifier !== undefined &&
      (obj.national_identifier = message.national_identifier);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetMemberByNationalIdentifierRequest>, I>
  >(object: I): GetMemberByNationalIdentifierRequest {
    const message = createBaseGetMemberByNationalIdentifierRequest();
    message.national_identifier = object.national_identifier ?? "";
    return message;
  },
};

function createBaseGetMembersRequest(): GetMembersRequest {
  return { skip: undefined, take: undefined };
}

export const GetMembersRequest = {
  encode(
    message: GetMembersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.skip !== undefined) {
      writer.uint32(8).int64(message.skip);
    }
    if (message.take !== undefined) {
      writer.uint32(16).int64(message.take);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skip = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.take = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMembersRequest {
    return {
      skip: isSet(object.skip) ? Number(object.skip) : undefined,
      take: isSet(object.take) ? Number(object.take) : undefined,
    };
  },

  toJSON(message: GetMembersRequest): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = Math.round(message.skip));
    message.take !== undefined && (obj.take = Math.round(message.take));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMembersRequest>, I>>(
    object: I
  ): GetMembersRequest {
    const message = createBaseGetMembersRequest();
    message.skip = object.skip ?? undefined;
    message.take = object.take ?? undefined;
    return message;
  },
};

function createBaseCreateMemberRequest(): CreateMemberRequest {
  return {
    national_identifier: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    address: undefined,
    membership_type: 0,
    renewed_date: undefined,
    override_expiration_date: undefined,
  };
}

export const CreateMemberRequest = {
  encode(
    message: CreateMemberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.national_identifier !== "") {
      writer.uint32(10).string(message.national_identifier);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.first_name !== "") {
      writer.uint32(26).string(message.first_name);
    }
    if (message.last_name !== "") {
      writer.uint32(34).string(message.last_name);
    }
    if (message.phone_number !== "") {
      writer.uint32(42).string(message.phone_number);
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(50).fork()).ldelim();
    }
    if (message.membership_type !== 0) {
      writer.uint32(56).int32(message.membership_type);
    }
    if (message.renewed_date !== undefined) {
      Timestamp.encode(message.renewed_date, writer.uint32(66).fork()).ldelim();
    }
    if (message.override_expiration_date !== undefined) {
      Timestamp.encode(
        message.override_expiration_date,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.national_identifier = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.first_name = reader.string();
          break;
        case 4:
          message.last_name = reader.string();
          break;
        case 5:
          message.phone_number = reader.string();
          break;
        case 6:
          message.address = Address.decode(reader, reader.uint32());
          break;
        case 7:
          message.membership_type = reader.int32() as any;
          break;
        case 8:
          message.renewed_date = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.override_expiration_date = Timestamp.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMemberRequest {
    return {
      national_identifier: isSet(object.national_identifier)
        ? String(object.national_identifier)
        : "",
      email: isSet(object.email) ? String(object.email) : "",
      first_name: isSet(object.first_name) ? String(object.first_name) : "",
      last_name: isSet(object.last_name) ? String(object.last_name) : "",
      phone_number: isSet(object.phone_number)
        ? String(object.phone_number)
        : "",
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
      membership_type: isSet(object.membership_type)
        ? membershipTypeFromJSON(object.membership_type)
        : 0,
      renewed_date: isSet(object.renewed_date)
        ? fromJsonTimestamp(object.renewed_date)
        : undefined,
      override_expiration_date: isSet(object.override_expiration_date)
        ? fromJsonTimestamp(object.override_expiration_date)
        : undefined,
    };
  },

  toJSON(message: CreateMemberRequest): unknown {
    const obj: any = {};
    message.national_identifier !== undefined &&
      (obj.national_identifier = message.national_identifier);
    message.email !== undefined && (obj.email = message.email);
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.phone_number !== undefined &&
      (obj.phone_number = message.phone_number);
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    message.membership_type !== undefined &&
      (obj.membership_type = membershipTypeToJSON(message.membership_type));
    message.renewed_date !== undefined &&
      (obj.renewed_date = fromTimestamp(message.renewed_date).toISOString());
    message.override_expiration_date !== undefined &&
      (obj.override_expiration_date = fromTimestamp(
        message.override_expiration_date
      ).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateMemberRequest>, I>>(
    object: I
  ): CreateMemberRequest {
    const message = createBaseCreateMemberRequest();
    message.national_identifier = object.national_identifier ?? "";
    message.email = object.email ?? "";
    message.first_name = object.first_name ?? "";
    message.last_name = object.last_name ?? "";
    message.phone_number = object.phone_number ?? "";
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    message.membership_type = object.membership_type ?? 0;
    message.renewed_date =
      object.renewed_date !== undefined && object.renewed_date !== null
        ? Timestamp.fromPartial(object.renewed_date)
        : undefined;
    message.override_expiration_date =
      object.override_expiration_date !== undefined &&
      object.override_expiration_date !== null
        ? Timestamp.fromPartial(object.override_expiration_date)
        : undefined;
    return message;
  },
};

function createBaseUpdateMemberRequest(): UpdateMemberRequest {
  return {
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    address: undefined,
    membership_type: 0,
    renewed_date: undefined,
    override_expiration_date: undefined,
    deactivated: false,
  };
}

export const UpdateMemberRequest = {
  encode(
    message: UpdateMemberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.first_name !== "") {
      writer.uint32(26).string(message.first_name);
    }
    if (message.last_name !== "") {
      writer.uint32(34).string(message.last_name);
    }
    if (message.phone_number !== "") {
      writer.uint32(42).string(message.phone_number);
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(50).fork()).ldelim();
    }
    if (message.membership_type !== 0) {
      writer.uint32(56).int32(message.membership_type);
    }
    if (message.renewed_date !== undefined) {
      Timestamp.encode(message.renewed_date, writer.uint32(66).fork()).ldelim();
    }
    if (message.override_expiration_date !== undefined) {
      Timestamp.encode(
        message.override_expiration_date,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.deactivated === true) {
      writer.uint32(80).bool(message.deactivated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.first_name = reader.string();
          break;
        case 4:
          message.last_name = reader.string();
          break;
        case 5:
          message.phone_number = reader.string();
          break;
        case 6:
          message.address = Address.decode(reader, reader.uint32());
          break;
        case 7:
          message.membership_type = reader.int32() as any;
          break;
        case 8:
          message.renewed_date = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.override_expiration_date = Timestamp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.deactivated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateMemberRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      email: isSet(object.email) ? String(object.email) : "",
      first_name: isSet(object.first_name) ? String(object.first_name) : "",
      last_name: isSet(object.last_name) ? String(object.last_name) : "",
      phone_number: isSet(object.phone_number)
        ? String(object.phone_number)
        : "",
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
      membership_type: isSet(object.membership_type)
        ? membershipTypeFromJSON(object.membership_type)
        : 0,
      renewed_date: isSet(object.renewed_date)
        ? fromJsonTimestamp(object.renewed_date)
        : undefined,
      override_expiration_date: isSet(object.override_expiration_date)
        ? fromJsonTimestamp(object.override_expiration_date)
        : undefined,
      deactivated: isSet(object.deactivated)
        ? Boolean(object.deactivated)
        : false,
    };
  },

  toJSON(message: UpdateMemberRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.email !== undefined && (obj.email = message.email);
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.phone_number !== undefined &&
      (obj.phone_number = message.phone_number);
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    message.membership_type !== undefined &&
      (obj.membership_type = membershipTypeToJSON(message.membership_type));
    message.renewed_date !== undefined &&
      (obj.renewed_date = fromTimestamp(message.renewed_date).toISOString());
    message.override_expiration_date !== undefined &&
      (obj.override_expiration_date = fromTimestamp(
        message.override_expiration_date
      ).toISOString());
    message.deactivated !== undefined &&
      (obj.deactivated = message.deactivated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMemberRequest>, I>>(
    object: I
  ): UpdateMemberRequest {
    const message = createBaseUpdateMemberRequest();
    message.id = object.id ?? 0;
    message.email = object.email ?? "";
    message.first_name = object.first_name ?? "";
    message.last_name = object.last_name ?? "";
    message.phone_number = object.phone_number ?? "";
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    message.membership_type = object.membership_type ?? 0;
    message.renewed_date =
      object.renewed_date !== undefined && object.renewed_date !== null
        ? Timestamp.fromPartial(object.renewed_date)
        : undefined;
    message.override_expiration_date =
      object.override_expiration_date !== undefined &&
      object.override_expiration_date !== null
        ? Timestamp.fromPartial(object.override_expiration_date)
        : undefined;
    message.deactivated = object.deactivated ?? false;
    return message;
  },
};

function createBaseDeleteMemberRequest(): DeleteMemberRequest {
  return { member_id: 0 };
}

export const DeleteMemberRequest = {
  encode(
    message: DeleteMemberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.member_id !== 0) {
      writer.uint32(8).int64(message.member_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member_id = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteMemberRequest {
    return {
      member_id: isSet(object.member_id) ? Number(object.member_id) : 0,
    };
  },

  toJSON(message: DeleteMemberRequest): unknown {
    const obj: any = {};
    message.member_id !== undefined &&
      (obj.member_id = Math.round(message.member_id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMemberRequest>, I>>(
    object: I
  ): DeleteMemberRequest {
    const message = createBaseDeleteMemberRequest();
    message.member_id = object.member_id ?? 0;
    return message;
  },
};

function createBaseUpdateStatusesRequest(): UpdateStatusesRequest {
  return {};
}

export const UpdateStatusesRequest = {
  encode(
    _: UpdateStatusesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateStatusesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateStatusesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UpdateStatusesRequest {
    return {};
  },

  toJSON(_: UpdateStatusesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateStatusesRequest>, I>>(
    _: I
  ): UpdateStatusesRequest {
    const message = createBaseUpdateStatusesRequest();
    return message;
  },
};

function createBaseFindMembersRequest(): FindMembersRequest {
  return { search_value: "" };
}

export const FindMembersRequest = {
  encode(
    message: FindMembersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.search_value !== "") {
      writer.uint32(10).string(message.search_value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.search_value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FindMembersRequest {
    return {
      search_value: isSet(object.search_value)
        ? String(object.search_value)
        : "",
    };
  },

  toJSON(message: FindMembersRequest): unknown {
    const obj: any = {};
    message.search_value !== undefined &&
      (obj.search_value = message.search_value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FindMembersRequest>, I>>(
    object: I
  ): FindMembersRequest {
    const message = createBaseFindMembersRequest();
    message.search_value = object.search_value ?? "";
    return message;
  },
};

function createBaseMember(): Member {
  return {
    id: 0,
    national_identifier: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    address: undefined,
    membership_type: 0,
    renewed_date: undefined,
    override_expiration_date: undefined,
    status: 0,
    deactivated: false,
  };
}

export const Member = {
  encode(
    message: Member,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.national_identifier !== "") {
      writer.uint32(18).string(message.national_identifier);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.first_name !== "") {
      writer.uint32(34).string(message.first_name);
    }
    if (message.last_name !== "") {
      writer.uint32(42).string(message.last_name);
    }
    if (message.phone_number !== "") {
      writer.uint32(50).string(message.phone_number);
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(58).fork()).ldelim();
    }
    if (message.membership_type !== 0) {
      writer.uint32(64).int32(message.membership_type);
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
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.deactivated === true) {
      writer.uint32(96).bool(message.deactivated);
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
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.national_identifier = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        case 4:
          message.first_name = reader.string();
          break;
        case 5:
          message.last_name = reader.string();
          break;
        case 6:
          message.phone_number = reader.string();
          break;
        case 7:
          message.address = Address.decode(reader, reader.uint32());
          break;
        case 8:
          message.membership_type = reader.int32() as any;
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
          message.status = reader.int32() as any;
          break;
        case 12:
          message.deactivated = reader.bool();
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
      id: isSet(object.id) ? Number(object.id) : 0,
      national_identifier: isSet(object.national_identifier)
        ? String(object.national_identifier)
        : "",
      email: isSet(object.email) ? String(object.email) : "",
      first_name: isSet(object.first_name) ? String(object.first_name) : "",
      last_name: isSet(object.last_name) ? String(object.last_name) : "",
      phone_number: isSet(object.phone_number)
        ? String(object.phone_number)
        : "",
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
      membership_type: isSet(object.membership_type)
        ? membershipTypeFromJSON(object.membership_type)
        : 0,
      renewed_date: isSet(object.renewed_date)
        ? fromJsonTimestamp(object.renewed_date)
        : undefined,
      override_expiration_date: isSet(object.override_expiration_date)
        ? fromJsonTimestamp(object.override_expiration_date)
        : undefined,
      status: isSet(object.status)
        ? membershipStatusFromJSON(object.status)
        : 0,
      deactivated: isSet(object.deactivated)
        ? Boolean(object.deactivated)
        : false,
    };
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.national_identifier !== undefined &&
      (obj.national_identifier = message.national_identifier);
    message.email !== undefined && (obj.email = message.email);
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.phone_number !== undefined &&
      (obj.phone_number = message.phone_number);
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    message.membership_type !== undefined &&
      (obj.membership_type = membershipTypeToJSON(message.membership_type));
    message.renewed_date !== undefined &&
      (obj.renewed_date = fromTimestamp(message.renewed_date).toISOString());
    message.override_expiration_date !== undefined &&
      (obj.override_expiration_date = fromTimestamp(
        message.override_expiration_date
      ).toISOString());
    message.status !== undefined &&
      (obj.status = membershipStatusToJSON(message.status));
    message.deactivated !== undefined &&
      (obj.deactivated = message.deactivated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Member>, I>>(object: I): Member {
    const message = createBaseMember();
    message.id = object.id ?? 0;
    message.national_identifier = object.national_identifier ?? "";
    message.email = object.email ?? "";
    message.first_name = object.first_name ?? "";
    message.last_name = object.last_name ?? "";
    message.phone_number = object.phone_number ?? "";
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    message.membership_type = object.membership_type ?? 0;
    message.renewed_date =
      object.renewed_date !== undefined && object.renewed_date !== null
        ? Timestamp.fromPartial(object.renewed_date)
        : undefined;
    message.override_expiration_date =
      object.override_expiration_date !== undefined &&
      object.override_expiration_date !== null
        ? Timestamp.fromPartial(object.override_expiration_date)
        : undefined;
    message.status = object.status ?? 0;
    message.deactivated = object.deactivated ?? false;
    return message;
  },
};

function createBaseAddress(): Address {
  return { street: "", postal_code: "", city: "", country: "" };
}

export const Address = {
  encode(
    message: Address,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.street !== "") {
      writer.uint32(10).string(message.street);
    }
    if (message.postal_code !== "") {
      writer.uint32(18).string(message.postal_code);
    }
    if (message.city !== "") {
      writer.uint32(26).string(message.city);
    }
    if (message.country !== "") {
      writer.uint32(34).string(message.country);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.street = reader.string();
          break;
        case 2:
          message.postal_code = reader.string();
          break;
        case 3:
          message.city = reader.string();
          break;
        case 4:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Address {
    return {
      street: isSet(object.street) ? String(object.street) : "",
      postal_code: isSet(object.postal_code) ? String(object.postal_code) : "",
      city: isSet(object.city) ? String(object.city) : "",
      country: isSet(object.country) ? String(object.country) : "",
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.street !== undefined && (obj.street = message.street);
    message.postal_code !== undefined &&
      (obj.postal_code = message.postal_code);
    message.city !== undefined && (obj.city = message.city);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.street = object.street ?? "";
    message.postal_code = object.postal_code ?? "";
    message.city = object.city ?? "";
    message.country = object.country ?? "";
    return message;
  },
};

function createBaseGetMemberResponse(): GetMemberResponse {
  return { member: undefined };
}

export const GetMemberResponse = {
  encode(
    message: GetMemberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMemberResponse {
    return {
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
    };
  },

  toJSON(message: GetMemberResponse): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMemberResponse>, I>>(
    object: I
  ): GetMemberResponse {
    const message = createBaseGetMemberResponse();
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    return message;
  },
};

function createBaseUpdateMemberResponse(): UpdateMemberResponse {
  return { member: undefined };
}

export const UpdateMemberResponse = {
  encode(
    message: UpdateMemberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateMemberResponse {
    return {
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
    };
  },

  toJSON(message: UpdateMemberResponse): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMemberResponse>, I>>(
    object: I
  ): UpdateMemberResponse {
    const message = createBaseUpdateMemberResponse();
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    return message;
  },
};

function createBaseCreateMemberResponse(): CreateMemberResponse {
  return { member: undefined };
}

export const CreateMemberResponse = {
  encode(
    message: CreateMemberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMemberResponse {
    return {
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
    };
  },

  toJSON(message: CreateMemberResponse): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateMemberResponse>, I>>(
    object: I
  ): CreateMemberResponse {
    const message = createBaseCreateMemberResponse();
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    return message;
  },
};

function createBaseDeleteMemberResponse(): DeleteMemberResponse {
  return { member: undefined };
}

export const DeleteMemberResponse = {
  encode(
    message: DeleteMemberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteMemberResponse {
    return {
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
    };
  },

  toJSON(message: DeleteMemberResponse): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMemberResponse>, I>>(
    object: I
  ): DeleteMemberResponse {
    const message = createBaseDeleteMemberResponse();
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    return message;
  },
};

function createBaseGetMembersResponse(): GetMembersResponse {
  return { members: [] };
}

export const GetMembersResponse = {
  encode(
    message: GetMembersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMembersResponse {
    return {
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => Member.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetMembersResponse): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? Member.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMembersResponse>, I>>(
    object: I
  ): GetMembersResponse {
    const message = createBaseGetMembersResponse();
    message.members = object.members?.map((e) => Member.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateStatusesResponse(): UpdateStatusesResponse {
  return { success: false, error_message: "" };
}

export const UpdateStatusesResponse = {
  encode(
    message: UpdateStatusesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.error_message !== "") {
      writer.uint32(18).string(message.error_message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateStatusesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateStatusesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.error_message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateStatusesResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      error_message: isSet(object.error_message)
        ? String(object.error_message)
        : "",
    };
  },

  toJSON(message: UpdateStatusesResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error_message !== undefined &&
      (obj.error_message = message.error_message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateStatusesResponse>, I>>(
    object: I
  ): UpdateStatusesResponse {
    const message = createBaseUpdateStatusesResponse();
    message.success = object.success ?? false;
    message.error_message = object.error_message ?? "";
    return message;
  },
};

function createBaseFindMembersResponse(): FindMembersResponse {
  return { members: [] };
}

export const FindMembersResponse = {
  encode(
    message: FindMembersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FindMembersResponse {
    return {
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => Member.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FindMembersResponse): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? Member.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FindMembersResponse>, I>>(
    object: I
  ): FindMembersResponse {
    const message = createBaseFindMembersResponse();
    message.members = object.members?.map((e) => Member.fromPartial(e)) || [];
    return message;
  },
};

export const MembersServiceService = {
  getById: {
    path: "/uptown_runners.members.v2.MembersService/GetById",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetMemberByIdRequest) =>
      Buffer.from(GetMemberByIdRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetMemberByIdRequest.decode(value),
    responseSerialize: (value: GetMemberResponse) =>
      Buffer.from(GetMemberResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetMemberResponse.decode(value),
  },
  getByEmail: {
    path: "/uptown_runners.members.v2.MembersService/GetByEmail",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetMemberByEmailRequest) =>
      Buffer.from(GetMemberByEmailRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetMemberByEmailRequest.decode(value),
    responseSerialize: (value: GetMemberResponse) =>
      Buffer.from(GetMemberResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetMemberResponse.decode(value),
  },
  getByNationalIdentifier: {
    path: "/uptown_runners.members.v2.MembersService/GetByNationalIdentifier",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetMemberByNationalIdentifierRequest) =>
      Buffer.from(GetMemberByNationalIdentifierRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetMemberByNationalIdentifierRequest.decode(value),
    responseSerialize: (value: GetMemberResponse) =>
      Buffer.from(GetMemberResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetMemberResponse.decode(value),
  },
  list: {
    path: "/uptown_runners.members.v2.MembersService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetMembersRequest) =>
      Buffer.from(GetMembersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetMembersRequest.decode(value),
    responseSerialize: (value: GetMembersResponse) =>
      Buffer.from(GetMembersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetMembersResponse.decode(value),
  },
  create: {
    path: "/uptown_runners.members.v2.MembersService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateMemberRequest) =>
      Buffer.from(CreateMemberRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateMemberRequest.decode(value),
    responseSerialize: (value: CreateMemberResponse) =>
      Buffer.from(CreateMemberResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateMemberResponse.decode(value),
  },
  update: {
    path: "/uptown_runners.members.v2.MembersService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateMemberRequest) =>
      Buffer.from(UpdateMemberRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateMemberRequest.decode(value),
    responseSerialize: (value: UpdateMemberResponse) =>
      Buffer.from(UpdateMemberResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateMemberResponse.decode(value),
  },
  delete: {
    path: "/uptown_runners.members.v2.MembersService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteMemberRequest) =>
      Buffer.from(DeleteMemberRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteMemberRequest.decode(value),
    responseSerialize: (value: DeleteMemberResponse) =>
      Buffer.from(DeleteMemberResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteMemberResponse.decode(value),
  },
  updateStatuses: {
    path: "/uptown_runners.members.v2.MembersService/UpdateStatuses",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateStatusesRequest) =>
      Buffer.from(UpdateStatusesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateStatusesRequest.decode(value),
    responseSerialize: (value: UpdateStatusesResponse) =>
      Buffer.from(UpdateStatusesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      UpdateStatusesResponse.decode(value),
  },
  findMembers: {
    path: "/uptown_runners.members.v2.MembersService/FindMembers",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FindMembersRequest) =>
      Buffer.from(FindMembersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FindMembersRequest.decode(value),
    responseSerialize: (value: FindMembersResponse) =>
      Buffer.from(FindMembersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => FindMembersResponse.decode(value),
  },
} as const;

export interface MembersServiceServer extends UntypedServiceImplementation {
  getById: handleUnaryCall<GetMemberByIdRequest, GetMemberResponse>;
  getByEmail: handleUnaryCall<GetMemberByEmailRequest, GetMemberResponse>;
  getByNationalIdentifier: handleUnaryCall<
    GetMemberByNationalIdentifierRequest,
    GetMemberResponse
  >;
  list: handleUnaryCall<GetMembersRequest, GetMembersResponse>;
  create: handleUnaryCall<CreateMemberRequest, CreateMemberResponse>;
  update: handleUnaryCall<UpdateMemberRequest, UpdateMemberResponse>;
  delete: handleUnaryCall<DeleteMemberRequest, DeleteMemberResponse>;
  updateStatuses: handleUnaryCall<
    UpdateStatusesRequest,
    UpdateStatusesResponse
  >;
  findMembers: handleUnaryCall<FindMembersRequest, FindMembersResponse>;
}

export interface MembersServiceClient extends Client {
  getById(
    request: GetMemberByIdRequest,
    callback: (error: ServiceError | null, response: GetMemberResponse) => void
  ): ClientUnaryCall;
  getById(
    request: GetMemberByIdRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetMemberResponse) => void
  ): ClientUnaryCall;
  getById(
    request: GetMemberByIdRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetMemberResponse) => void
  ): ClientUnaryCall;
  getByEmail(
    request: GetMemberByEmailRequest,
    callback: (error: ServiceError | null, response: GetMemberResponse) => void
  ): ClientUnaryCall;
  getByEmail(
    request: GetMemberByEmailRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetMemberResponse) => void
  ): ClientUnaryCall;
  getByEmail(
    request: GetMemberByEmailRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetMemberResponse) => void
  ): ClientUnaryCall;
  getByNationalIdentifier(
    request: GetMemberByNationalIdentifierRequest,
    callback: (error: ServiceError | null, response: GetMemberResponse) => void
  ): ClientUnaryCall;
  getByNationalIdentifier(
    request: GetMemberByNationalIdentifierRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetMemberResponse) => void
  ): ClientUnaryCall;
  getByNationalIdentifier(
    request: GetMemberByNationalIdentifierRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetMemberResponse) => void
  ): ClientUnaryCall;
  list(
    request: GetMembersRequest,
    callback: (error: ServiceError | null, response: GetMembersResponse) => void
  ): ClientUnaryCall;
  list(
    request: GetMembersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetMembersResponse) => void
  ): ClientUnaryCall;
  list(
    request: GetMembersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetMembersResponse) => void
  ): ClientUnaryCall;
  create(
    request: CreateMemberRequest,
    callback: (
      error: ServiceError | null,
      response: CreateMemberResponse
    ) => void
  ): ClientUnaryCall;
  create(
    request: CreateMemberRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateMemberResponse
    ) => void
  ): ClientUnaryCall;
  create(
    request: CreateMemberRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateMemberResponse
    ) => void
  ): ClientUnaryCall;
  update(
    request: UpdateMemberRequest,
    callback: (
      error: ServiceError | null,
      response: UpdateMemberResponse
    ) => void
  ): ClientUnaryCall;
  update(
    request: UpdateMemberRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdateMemberResponse
    ) => void
  ): ClientUnaryCall;
  update(
    request: UpdateMemberRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdateMemberResponse
    ) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteMemberRequest,
    callback: (
      error: ServiceError | null,
      response: DeleteMemberResponse
    ) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteMemberRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteMemberResponse
    ) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteMemberRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteMemberResponse
    ) => void
  ): ClientUnaryCall;
  updateStatuses(
    request: UpdateStatusesRequest,
    callback: (
      error: ServiceError | null,
      response: UpdateStatusesResponse
    ) => void
  ): ClientUnaryCall;
  updateStatuses(
    request: UpdateStatusesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdateStatusesResponse
    ) => void
  ): ClientUnaryCall;
  updateStatuses(
    request: UpdateStatusesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdateStatusesResponse
    ) => void
  ): ClientUnaryCall;
  findMembers(
    request: FindMembersRequest,
    callback: (
      error: ServiceError | null,
      response: FindMembersResponse
    ) => void
  ): ClientUnaryCall;
  findMembers(
    request: FindMembersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: FindMembersResponse
    ) => void
  ): ClientUnaryCall;
  findMembers(
    request: FindMembersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: FindMembersResponse
    ) => void
  ): ClientUnaryCall;
}

export const MembersServiceClient = makeGenericClientConstructor(
  MembersServiceService,
  "uptown_runners.members.v2.MembersService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): MembersServiceClient;
  service: typeof MembersServiceService;
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
