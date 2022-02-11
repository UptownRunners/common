/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "uptown_runners.members.v1";

export enum MemberShipType {
  FULL = 0,
  SUPPORT = 1,
  UNRECOGNIZED = -1,
}

export function memberShipTypeFromJSON(object: any): MemberShipType {
  switch (object) {
    case 0:
    case "FULL":
      return MemberShipType.FULL;
    case 1:
    case "SUPPORT":
      return MemberShipType.SUPPORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MemberShipType.UNRECOGNIZED;
  }
}

export function memberShipTypeToJSON(object: MemberShipType): string {
  switch (object) {
    case MemberShipType.FULL:
      return "FULL";
    case MemberShipType.SUPPORT:
      return "SUPPORT";
    default:
      return "UNKNOWN";
  }
}

export enum MembershipStatus {
  Active = 0,
  Inactive = 1,
  UNRECOGNIZED = -1,
}

export function membershipStatusFromJSON(object: any): MembershipStatus {
  switch (object) {
    case 0:
    case "Active":
      return MembershipStatus.Active;
    case 1:
    case "Inactive":
      return MembershipStatus.Inactive;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MembershipStatus.UNRECOGNIZED;
  }
}

export function membershipStatusToJSON(object: MembershipStatus): string {
  switch (object) {
    case MembershipStatus.Active:
      return "Active";
    case MembershipStatus.Inactive:
      return "Inactive";
    default:
      return "UNKNOWN";
  }
}

export interface GetMemberByIdRequest {
  Id: number;
}

export interface GetMemberByEmailRequest {
  Email: string;
}

export interface GetMemberByNationalIdentifierRequest {
  NationalIdentifier: string;
}

export interface GetMembersRequest {
  Skip: number;
  Take: number;
}

export interface CreateMemberRequest {
  NationalIdentifier: string;
  Email: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Address: string;
  MemberShipType: MemberShipType;
  RenewedDate: Date | undefined;
  OverrideExpirationDate: Date | undefined;
}

export interface UpdateMemberRequest {
  Id: number;
  Email: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Address: string;
  MemberShipType: MemberShipType;
  RenewedDate: Date | undefined;
  OverrideExpirationDate: Date | undefined;
}

export interface DeleteMemberRequest {
  MemberId: number;
}

export interface Member {
  Id: number;
  NationalIdentifier: string;
  Email: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Address: string;
  MemberShipType: MemberShipType;
  RenewedDate: Date | undefined;
  OverrideExpirationDate: Date | undefined;
  Status: MembershipStatus;
}

export interface GetMemberResponse {
  Member: Member | undefined;
}

export interface UpdateMemberResponse {
  Member: Member | undefined;
}

export interface CreateMemberResponse {
  Member: Member | undefined;
}

export interface DeleteMemberResponse {
  Member: Member | undefined;
}

export interface GetMembersResponse {
  Members: Member[];
}

function createBaseGetMemberByIdRequest(): GetMemberByIdRequest {
  return { Id: 0 };
}

export const GetMemberByIdRequest = {
  encode(
    message: GetMemberByIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Id !== 0) {
      writer.uint32(8).int64(message.Id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetMemberByIdRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemberByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Id = longToNumber(reader.int64() as Long);
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
      Id: isSet(object.Id) ? Number(object.Id) : 0,
    };
  },

  toJSON(message: GetMemberByIdRequest): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = Math.round(message.Id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMemberByIdRequest>, I>>(
    object: I
  ): GetMemberByIdRequest {
    const message = createBaseGetMemberByIdRequest();
    message.Id = object.Id ?? 0;
    return message;
  },
};

function createBaseGetMemberByEmailRequest(): GetMemberByEmailRequest {
  return { Email: "" };
}

export const GetMemberByEmailRequest = {
  encode(
    message: GetMemberByEmailRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Email !== "") {
      writer.uint32(10).string(message.Email);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetMemberByEmailRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemberByEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Email = reader.string();
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
      Email: isSet(object.Email) ? String(object.Email) : "",
    };
  },

  toJSON(message: GetMemberByEmailRequest): unknown {
    const obj: any = {};
    message.Email !== undefined && (obj.Email = message.Email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMemberByEmailRequest>, I>>(
    object: I
  ): GetMemberByEmailRequest {
    const message = createBaseGetMemberByEmailRequest();
    message.Email = object.Email ?? "";
    return message;
  },
};

function createBaseGetMemberByNationalIdentifierRequest(): GetMemberByNationalIdentifierRequest {
  return { NationalIdentifier: "" };
}

export const GetMemberByNationalIdentifierRequest = {
  encode(
    message: GetMemberByNationalIdentifierRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NationalIdentifier !== "") {
      writer.uint32(10).string(message.NationalIdentifier);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GetMemberByNationalIdentifierRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemberByNationalIdentifierRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NationalIdentifier = reader.string();
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
      NationalIdentifier: isSet(object.NationalIdentifier)
        ? String(object.NationalIdentifier)
        : "",
    };
  },

  toJSON(message: GetMemberByNationalIdentifierRequest): unknown {
    const obj: any = {};
    message.NationalIdentifier !== undefined &&
      (obj.NationalIdentifier = message.NationalIdentifier);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetMemberByNationalIdentifierRequest>, I>
  >(object: I): GetMemberByNationalIdentifierRequest {
    const message = createBaseGetMemberByNationalIdentifierRequest();
    message.NationalIdentifier = object.NationalIdentifier ?? "";
    return message;
  },
};

function createBaseGetMembersRequest(): GetMembersRequest {
  return { Skip: 0, Take: 0 };
}

export const GetMembersRequest = {
  encode(message: GetMembersRequest, writer: Writer = Writer.create()): Writer {
    if (message.Skip !== 0) {
      writer.uint32(8).int64(message.Skip);
    }
    if (message.Take !== 0) {
      writer.uint32(16).int64(message.Take);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetMembersRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Skip = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.Take = longToNumber(reader.int64() as Long);
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
      Skip: isSet(object.Skip) ? Number(object.Skip) : 0,
      Take: isSet(object.Take) ? Number(object.Take) : 0,
    };
  },

  toJSON(message: GetMembersRequest): unknown {
    const obj: any = {};
    message.Skip !== undefined && (obj.Skip = Math.round(message.Skip));
    message.Take !== undefined && (obj.Take = Math.round(message.Take));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMembersRequest>, I>>(
    object: I
  ): GetMembersRequest {
    const message = createBaseGetMembersRequest();
    message.Skip = object.Skip ?? 0;
    message.Take = object.Take ?? 0;
    return message;
  },
};

function createBaseCreateMemberRequest(): CreateMemberRequest {
  return {
    NationalIdentifier: "",
    Email: "",
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Address: "",
    MemberShipType: 0,
    RenewedDate: undefined,
    OverrideExpirationDate: undefined,
  };
}

export const CreateMemberRequest = {
  encode(
    message: CreateMemberRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NationalIdentifier !== "") {
      writer.uint32(10).string(message.NationalIdentifier);
    }
    if (message.Email !== "") {
      writer.uint32(18).string(message.Email);
    }
    if (message.FirstName !== "") {
      writer.uint32(26).string(message.FirstName);
    }
    if (message.LastName !== "") {
      writer.uint32(34).string(message.LastName);
    }
    if (message.PhoneNumber !== "") {
      writer.uint32(42).string(message.PhoneNumber);
    }
    if (message.Address !== "") {
      writer.uint32(50).string(message.Address);
    }
    if (message.MemberShipType !== 0) {
      writer.uint32(56).int32(message.MemberShipType);
    }
    if (message.RenewedDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.RenewedDate),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.OverrideExpirationDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.OverrideExpirationDate),
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateMemberRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NationalIdentifier = reader.string();
          break;
        case 2:
          message.Email = reader.string();
          break;
        case 3:
          message.FirstName = reader.string();
          break;
        case 4:
          message.LastName = reader.string();
          break;
        case 5:
          message.PhoneNumber = reader.string();
          break;
        case 6:
          message.Address = reader.string();
          break;
        case 7:
          message.MemberShipType = reader.int32() as any;
          break;
        case 8:
          message.RenewedDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.OverrideExpirationDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
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
      NationalIdentifier: isSet(object.NationalIdentifier)
        ? String(object.NationalIdentifier)
        : "",
      Email: isSet(object.Email) ? String(object.Email) : "",
      FirstName: isSet(object.FirstName) ? String(object.FirstName) : "",
      LastName: isSet(object.LastName) ? String(object.LastName) : "",
      PhoneNumber: isSet(object.PhoneNumber) ? String(object.PhoneNumber) : "",
      Address: isSet(object.Address) ? String(object.Address) : "",
      MemberShipType: isSet(object.MemberShipType)
        ? memberShipTypeFromJSON(object.MemberShipType)
        : 0,
      RenewedDate: isSet(object.RenewedDate)
        ? fromJsonTimestamp(object.RenewedDate)
        : undefined,
      OverrideExpirationDate: isSet(object.OverrideExpirationDate)
        ? fromJsonTimestamp(object.OverrideExpirationDate)
        : undefined,
    };
  },

  toJSON(message: CreateMemberRequest): unknown {
    const obj: any = {};
    message.NationalIdentifier !== undefined &&
      (obj.NationalIdentifier = message.NationalIdentifier);
    message.Email !== undefined && (obj.Email = message.Email);
    message.FirstName !== undefined && (obj.FirstName = message.FirstName);
    message.LastName !== undefined && (obj.LastName = message.LastName);
    message.PhoneNumber !== undefined &&
      (obj.PhoneNumber = message.PhoneNumber);
    message.Address !== undefined && (obj.Address = message.Address);
    message.MemberShipType !== undefined &&
      (obj.MemberShipType = memberShipTypeToJSON(message.MemberShipType));
    message.RenewedDate !== undefined &&
      (obj.RenewedDate = message.RenewedDate.toISOString());
    message.OverrideExpirationDate !== undefined &&
      (obj.OverrideExpirationDate =
        message.OverrideExpirationDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateMemberRequest>, I>>(
    object: I
  ): CreateMemberRequest {
    const message = createBaseCreateMemberRequest();
    message.NationalIdentifier = object.NationalIdentifier ?? "";
    message.Email = object.Email ?? "";
    message.FirstName = object.FirstName ?? "";
    message.LastName = object.LastName ?? "";
    message.PhoneNumber = object.PhoneNumber ?? "";
    message.Address = object.Address ?? "";
    message.MemberShipType = object.MemberShipType ?? 0;
    message.RenewedDate = object.RenewedDate ?? undefined;
    message.OverrideExpirationDate = object.OverrideExpirationDate ?? undefined;
    return message;
  },
};

function createBaseUpdateMemberRequest(): UpdateMemberRequest {
  return {
    Id: 0,
    Email: "",
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Address: "",
    MemberShipType: 0,
    RenewedDate: undefined,
    OverrideExpirationDate: undefined,
  };
}

export const UpdateMemberRequest = {
  encode(
    message: UpdateMemberRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Id !== 0) {
      writer.uint32(8).int64(message.Id);
    }
    if (message.Email !== "") {
      writer.uint32(18).string(message.Email);
    }
    if (message.FirstName !== "") {
      writer.uint32(26).string(message.FirstName);
    }
    if (message.LastName !== "") {
      writer.uint32(34).string(message.LastName);
    }
    if (message.PhoneNumber !== "") {
      writer.uint32(42).string(message.PhoneNumber);
    }
    if (message.Address !== "") {
      writer.uint32(50).string(message.Address);
    }
    if (message.MemberShipType !== 0) {
      writer.uint32(56).int32(message.MemberShipType);
    }
    if (message.RenewedDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.RenewedDate),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.OverrideExpirationDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.OverrideExpirationDate),
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateMemberRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.Email = reader.string();
          break;
        case 3:
          message.FirstName = reader.string();
          break;
        case 4:
          message.LastName = reader.string();
          break;
        case 5:
          message.PhoneNumber = reader.string();
          break;
        case 6:
          message.Address = reader.string();
          break;
        case 7:
          message.MemberShipType = reader.int32() as any;
          break;
        case 8:
          message.RenewedDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.OverrideExpirationDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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
      Id: isSet(object.Id) ? Number(object.Id) : 0,
      Email: isSet(object.Email) ? String(object.Email) : "",
      FirstName: isSet(object.FirstName) ? String(object.FirstName) : "",
      LastName: isSet(object.LastName) ? String(object.LastName) : "",
      PhoneNumber: isSet(object.PhoneNumber) ? String(object.PhoneNumber) : "",
      Address: isSet(object.Address) ? String(object.Address) : "",
      MemberShipType: isSet(object.MemberShipType)
        ? memberShipTypeFromJSON(object.MemberShipType)
        : 0,
      RenewedDate: isSet(object.RenewedDate)
        ? fromJsonTimestamp(object.RenewedDate)
        : undefined,
      OverrideExpirationDate: isSet(object.OverrideExpirationDate)
        ? fromJsonTimestamp(object.OverrideExpirationDate)
        : undefined,
    };
  },

  toJSON(message: UpdateMemberRequest): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = Math.round(message.Id));
    message.Email !== undefined && (obj.Email = message.Email);
    message.FirstName !== undefined && (obj.FirstName = message.FirstName);
    message.LastName !== undefined && (obj.LastName = message.LastName);
    message.PhoneNumber !== undefined &&
      (obj.PhoneNumber = message.PhoneNumber);
    message.Address !== undefined && (obj.Address = message.Address);
    message.MemberShipType !== undefined &&
      (obj.MemberShipType = memberShipTypeToJSON(message.MemberShipType));
    message.RenewedDate !== undefined &&
      (obj.RenewedDate = message.RenewedDate.toISOString());
    message.OverrideExpirationDate !== undefined &&
      (obj.OverrideExpirationDate =
        message.OverrideExpirationDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMemberRequest>, I>>(
    object: I
  ): UpdateMemberRequest {
    const message = createBaseUpdateMemberRequest();
    message.Id = object.Id ?? 0;
    message.Email = object.Email ?? "";
    message.FirstName = object.FirstName ?? "";
    message.LastName = object.LastName ?? "";
    message.PhoneNumber = object.PhoneNumber ?? "";
    message.Address = object.Address ?? "";
    message.MemberShipType = object.MemberShipType ?? 0;
    message.RenewedDate = object.RenewedDate ?? undefined;
    message.OverrideExpirationDate = object.OverrideExpirationDate ?? undefined;
    return message;
  },
};

function createBaseDeleteMemberRequest(): DeleteMemberRequest {
  return { MemberId: 0 };
}

export const DeleteMemberRequest = {
  encode(
    message: DeleteMemberRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.MemberId !== 0) {
      writer.uint32(8).int64(message.MemberId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteMemberRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MemberId = longToNumber(reader.int64() as Long);
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
      MemberId: isSet(object.MemberId) ? Number(object.MemberId) : 0,
    };
  },

  toJSON(message: DeleteMemberRequest): unknown {
    const obj: any = {};
    message.MemberId !== undefined &&
      (obj.MemberId = Math.round(message.MemberId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMemberRequest>, I>>(
    object: I
  ): DeleteMemberRequest {
    const message = createBaseDeleteMemberRequest();
    message.MemberId = object.MemberId ?? 0;
    return message;
  },
};

function createBaseMember(): Member {
  return {
    Id: 0,
    NationalIdentifier: "",
    Email: "",
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Address: "",
    MemberShipType: 0,
    RenewedDate: undefined,
    OverrideExpirationDate: undefined,
    Status: 0,
  };
}

export const Member = {
  encode(message: Member, writer: Writer = Writer.create()): Writer {
    if (message.Id !== 0) {
      writer.uint32(8).int64(message.Id);
    }
    if (message.NationalIdentifier !== "") {
      writer.uint32(18).string(message.NationalIdentifier);
    }
    if (message.Email !== "") {
      writer.uint32(26).string(message.Email);
    }
    if (message.FirstName !== "") {
      writer.uint32(34).string(message.FirstName);
    }
    if (message.LastName !== "") {
      writer.uint32(42).string(message.LastName);
    }
    if (message.PhoneNumber !== "") {
      writer.uint32(50).string(message.PhoneNumber);
    }
    if (message.Address !== "") {
      writer.uint32(58).string(message.Address);
    }
    if (message.MemberShipType !== 0) {
      writer.uint32(64).int32(message.MemberShipType);
    }
    if (message.RenewedDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.RenewedDate),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.OverrideExpirationDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.OverrideExpirationDate),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.Status !== 0) {
      writer.uint32(88).int32(message.Status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.NationalIdentifier = reader.string();
          break;
        case 3:
          message.Email = reader.string();
          break;
        case 4:
          message.FirstName = reader.string();
          break;
        case 5:
          message.LastName = reader.string();
          break;
        case 6:
          message.PhoneNumber = reader.string();
          break;
        case 7:
          message.Address = reader.string();
          break;
        case 8:
          message.MemberShipType = reader.int32() as any;
          break;
        case 9:
          message.RenewedDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.OverrideExpirationDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.Status = reader.int32() as any;
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
      Id: isSet(object.Id) ? Number(object.Id) : 0,
      NationalIdentifier: isSet(object.NationalIdentifier)
        ? String(object.NationalIdentifier)
        : "",
      Email: isSet(object.Email) ? String(object.Email) : "",
      FirstName: isSet(object.FirstName) ? String(object.FirstName) : "",
      LastName: isSet(object.LastName) ? String(object.LastName) : "",
      PhoneNumber: isSet(object.PhoneNumber) ? String(object.PhoneNumber) : "",
      Address: isSet(object.Address) ? String(object.Address) : "",
      MemberShipType: isSet(object.MemberShipType)
        ? memberShipTypeFromJSON(object.MemberShipType)
        : 0,
      RenewedDate: isSet(object.RenewedDate)
        ? fromJsonTimestamp(object.RenewedDate)
        : undefined,
      OverrideExpirationDate: isSet(object.OverrideExpirationDate)
        ? fromJsonTimestamp(object.OverrideExpirationDate)
        : undefined,
      Status: isSet(object.Status)
        ? membershipStatusFromJSON(object.Status)
        : 0,
    };
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = Math.round(message.Id));
    message.NationalIdentifier !== undefined &&
      (obj.NationalIdentifier = message.NationalIdentifier);
    message.Email !== undefined && (obj.Email = message.Email);
    message.FirstName !== undefined && (obj.FirstName = message.FirstName);
    message.LastName !== undefined && (obj.LastName = message.LastName);
    message.PhoneNumber !== undefined &&
      (obj.PhoneNumber = message.PhoneNumber);
    message.Address !== undefined && (obj.Address = message.Address);
    message.MemberShipType !== undefined &&
      (obj.MemberShipType = memberShipTypeToJSON(message.MemberShipType));
    message.RenewedDate !== undefined &&
      (obj.RenewedDate = message.RenewedDate.toISOString());
    message.OverrideExpirationDate !== undefined &&
      (obj.OverrideExpirationDate =
        message.OverrideExpirationDate.toISOString());
    message.Status !== undefined &&
      (obj.Status = membershipStatusToJSON(message.Status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Member>, I>>(object: I): Member {
    const message = createBaseMember();
    message.Id = object.Id ?? 0;
    message.NationalIdentifier = object.NationalIdentifier ?? "";
    message.Email = object.Email ?? "";
    message.FirstName = object.FirstName ?? "";
    message.LastName = object.LastName ?? "";
    message.PhoneNumber = object.PhoneNumber ?? "";
    message.Address = object.Address ?? "";
    message.MemberShipType = object.MemberShipType ?? 0;
    message.RenewedDate = object.RenewedDate ?? undefined;
    message.OverrideExpirationDate = object.OverrideExpirationDate ?? undefined;
    message.Status = object.Status ?? 0;
    return message;
  },
};

function createBaseGetMemberResponse(): GetMemberResponse {
  return { Member: undefined };
}

export const GetMemberResponse = {
  encode(message: GetMemberResponse, writer: Writer = Writer.create()): Writer {
    if (message.Member !== undefined) {
      Member.encode(message.Member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetMemberResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Member = Member.decode(reader, reader.uint32());
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
      Member: isSet(object.Member) ? Member.fromJSON(object.Member) : undefined,
    };
  },

  toJSON(message: GetMemberResponse): unknown {
    const obj: any = {};
    message.Member !== undefined &&
      (obj.Member = message.Member ? Member.toJSON(message.Member) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMemberResponse>, I>>(
    object: I
  ): GetMemberResponse {
    const message = createBaseGetMemberResponse();
    message.Member =
      object.Member !== undefined && object.Member !== null
        ? Member.fromPartial(object.Member)
        : undefined;
    return message;
  },
};

function createBaseUpdateMemberResponse(): UpdateMemberResponse {
  return { Member: undefined };
}

export const UpdateMemberResponse = {
  encode(
    message: UpdateMemberResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Member !== undefined) {
      Member.encode(message.Member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateMemberResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Member = Member.decode(reader, reader.uint32());
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
      Member: isSet(object.Member) ? Member.fromJSON(object.Member) : undefined,
    };
  },

  toJSON(message: UpdateMemberResponse): unknown {
    const obj: any = {};
    message.Member !== undefined &&
      (obj.Member = message.Member ? Member.toJSON(message.Member) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMemberResponse>, I>>(
    object: I
  ): UpdateMemberResponse {
    const message = createBaseUpdateMemberResponse();
    message.Member =
      object.Member !== undefined && object.Member !== null
        ? Member.fromPartial(object.Member)
        : undefined;
    return message;
  },
};

function createBaseCreateMemberResponse(): CreateMemberResponse {
  return { Member: undefined };
}

export const CreateMemberResponse = {
  encode(
    message: CreateMemberResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Member !== undefined) {
      Member.encode(message.Member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateMemberResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Member = Member.decode(reader, reader.uint32());
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
      Member: isSet(object.Member) ? Member.fromJSON(object.Member) : undefined,
    };
  },

  toJSON(message: CreateMemberResponse): unknown {
    const obj: any = {};
    message.Member !== undefined &&
      (obj.Member = message.Member ? Member.toJSON(message.Member) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateMemberResponse>, I>>(
    object: I
  ): CreateMemberResponse {
    const message = createBaseCreateMemberResponse();
    message.Member =
      object.Member !== undefined && object.Member !== null
        ? Member.fromPartial(object.Member)
        : undefined;
    return message;
  },
};

function createBaseDeleteMemberResponse(): DeleteMemberResponse {
  return { Member: undefined };
}

export const DeleteMemberResponse = {
  encode(
    message: DeleteMemberResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Member !== undefined) {
      Member.encode(message.Member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteMemberResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Member = Member.decode(reader, reader.uint32());
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
      Member: isSet(object.Member) ? Member.fromJSON(object.Member) : undefined,
    };
  },

  toJSON(message: DeleteMemberResponse): unknown {
    const obj: any = {};
    message.Member !== undefined &&
      (obj.Member = message.Member ? Member.toJSON(message.Member) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMemberResponse>, I>>(
    object: I
  ): DeleteMemberResponse {
    const message = createBaseDeleteMemberResponse();
    message.Member =
      object.Member !== undefined && object.Member !== null
        ? Member.fromPartial(object.Member)
        : undefined;
    return message;
  },
};

function createBaseGetMembersResponse(): GetMembersResponse {
  return { Members: [] };
}

export const GetMembersResponse = {
  encode(
    message: GetMembersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Members) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetMembersResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Members.push(Member.decode(reader, reader.uint32()));
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
      Members: Array.isArray(object?.Members)
        ? object.Members.map((e: any) => Member.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetMembersResponse): unknown {
    const obj: any = {};
    if (message.Members) {
      obj.Members = message.Members.map((e) =>
        e ? Member.toJSON(e) : undefined
      );
    } else {
      obj.Members = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMembersResponse>, I>>(
    object: I
  ): GetMembersResponse {
    const message = createBaseGetMembersResponse();
    message.Members = object.Members?.map((e) => Member.fromPartial(e)) || [];
    return message;
  },
};

export interface MembersService {
  GetById(request: GetMemberByIdRequest): Promise<GetMemberResponse>;
  GetByEmail(request: GetMemberByEmailRequest): Promise<GetMemberResponse>;
  GetByNationalIdentifier(
    request: GetMemberByNationalIdentifierRequest
  ): Promise<GetMemberResponse>;
  List(request: GetMembersRequest): Promise<GetMembersResponse>;
  Create(request: CreateMemberRequest): Promise<CreateMemberResponse>;
  Update(request: UpdateMemberRequest): Promise<UpdateMemberResponse>;
  Delete(request: DeleteMemberRequest): Promise<DeleteMemberResponse>;
}

export class MembersServiceClientImpl implements MembersService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetById = this.GetById.bind(this);
    this.GetByEmail = this.GetByEmail.bind(this);
    this.GetByNationalIdentifier = this.GetByNationalIdentifier.bind(this);
    this.List = this.List.bind(this);
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  GetById(request: GetMemberByIdRequest): Promise<GetMemberResponse> {
    const data = GetMemberByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "uptown_runners.members.v1.MembersService",
      "GetById",
      data
    );
    return promise.then((data) => GetMemberResponse.decode(new Reader(data)));
  }

  GetByEmail(request: GetMemberByEmailRequest): Promise<GetMemberResponse> {
    const data = GetMemberByEmailRequest.encode(request).finish();
    const promise = this.rpc.request(
      "uptown_runners.members.v1.MembersService",
      "GetByEmail",
      data
    );
    return promise.then((data) => GetMemberResponse.decode(new Reader(data)));
  }

  GetByNationalIdentifier(
    request: GetMemberByNationalIdentifierRequest
  ): Promise<GetMemberResponse> {
    const data = GetMemberByNationalIdentifierRequest.encode(request).finish();
    const promise = this.rpc.request(
      "uptown_runners.members.v1.MembersService",
      "GetByNationalIdentifier",
      data
    );
    return promise.then((data) => GetMemberResponse.decode(new Reader(data)));
  }

  List(request: GetMembersRequest): Promise<GetMembersResponse> {
    const data = GetMembersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "uptown_runners.members.v1.MembersService",
      "List",
      data
    );
    return promise.then((data) => GetMembersResponse.decode(new Reader(data)));
  }

  Create(request: CreateMemberRequest): Promise<CreateMemberResponse> {
    const data = CreateMemberRequest.encode(request).finish();
    const promise = this.rpc.request(
      "uptown_runners.members.v1.MembersService",
      "Create",
      data
    );
    return promise.then((data) =>
      CreateMemberResponse.decode(new Reader(data))
    );
  }

  Update(request: UpdateMemberRequest): Promise<UpdateMemberResponse> {
    const data = UpdateMemberRequest.encode(request).finish();
    const promise = this.rpc.request(
      "uptown_runners.members.v1.MembersService",
      "Update",
      data
    );
    return promise.then((data) =>
      UpdateMemberResponse.decode(new Reader(data))
    );
  }

  Delete(request: DeleteMemberRequest): Promise<DeleteMemberResponse> {
    const data = DeleteMemberRequest.encode(request).finish();
    const promise = this.rpc.request(
      "uptown_runners.members.v1.MembersService",
      "Delete",
      data
    );
    return promise.then((data) =>
      DeleteMemberResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
