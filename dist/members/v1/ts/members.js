"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersServiceClient = exports.MembersServiceService = exports.GetMembersResponse = exports.DeleteMemberResponse = exports.CreateMemberResponse = exports.UpdateMemberResponse = exports.GetMemberResponse = exports.Member = exports.DeleteMemberRequest = exports.UpdateMemberRequest = exports.CreateMemberRequest = exports.GetMembersRequest = exports.GetMemberByNationalIdentifierRequest = exports.GetMemberByEmailRequest = exports.GetMemberByIdRequest = exports.membershipStatusToJSON = exports.membershipStatusFromJSON = exports.MembershipStatus = exports.memberShipTypeToJSON = exports.memberShipTypeFromJSON = exports.MemberShipType = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const Long = require("long");
const grpc_js_1 = require("@grpc/grpc-js");
const timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = "uptown_runners.members.v1";
var MemberShipType;
(function (MemberShipType) {
    MemberShipType[MemberShipType["FULL"] = 0] = "FULL";
    MemberShipType[MemberShipType["SUPPORT"] = 1] = "SUPPORT";
    MemberShipType[MemberShipType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MemberShipType = exports.MemberShipType || (exports.MemberShipType = {}));
function memberShipTypeFromJSON(object) {
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
exports.memberShipTypeFromJSON = memberShipTypeFromJSON;
function memberShipTypeToJSON(object) {
    switch (object) {
        case MemberShipType.FULL:
            return "FULL";
        case MemberShipType.SUPPORT:
            return "SUPPORT";
        default:
            return "UNKNOWN";
    }
}
exports.memberShipTypeToJSON = memberShipTypeToJSON;
var MembershipStatus;
(function (MembershipStatus) {
    MembershipStatus[MembershipStatus["Active"] = 0] = "Active";
    MembershipStatus[MembershipStatus["Inactive"] = 1] = "Inactive";
    MembershipStatus[MembershipStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MembershipStatus = exports.MembershipStatus || (exports.MembershipStatus = {}));
function membershipStatusFromJSON(object) {
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
exports.membershipStatusFromJSON = membershipStatusFromJSON;
function membershipStatusToJSON(object) {
    switch (object) {
        case MembershipStatus.Active:
            return "Active";
        case MembershipStatus.Inactive:
            return "Inactive";
        default:
            return "UNKNOWN";
    }
}
exports.membershipStatusToJSON = membershipStatusToJSON;
function createBaseGetMemberByIdRequest() {
    return { Id: 0 };
}
exports.GetMemberByIdRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.Id !== 0) {
            writer.uint32(8).int64(message.Id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMemberByIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Id = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            Id: isSet(object.Id) ? Number(object.Id) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.Id !== undefined && (obj.Id = Math.round(message.Id));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMemberByIdRequest();
        message.Id = object.Id ?? 0;
        return message;
    },
};
function createBaseGetMemberByEmailRequest() {
    return { Email: "" };
}
exports.GetMemberByEmailRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.Email !== "") {
            writer.uint32(10).string(message.Email);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromJSON(object) {
        return {
            Email: isSet(object.Email) ? String(object.Email) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.Email !== undefined && (obj.Email = message.Email);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMemberByEmailRequest();
        message.Email = object.Email ?? "";
        return message;
    },
};
function createBaseGetMemberByNationalIdentifierRequest() {
    return { NationalIdentifier: "" };
}
exports.GetMemberByNationalIdentifierRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.NationalIdentifier !== "") {
            writer.uint32(10).string(message.NationalIdentifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
    fromJSON(object) {
        return {
            NationalIdentifier: isSet(object.NationalIdentifier)
                ? String(object.NationalIdentifier)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.NationalIdentifier !== undefined &&
            (obj.NationalIdentifier = message.NationalIdentifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMemberByNationalIdentifierRequest();
        message.NationalIdentifier = object.NationalIdentifier ?? "";
        return message;
    },
};
function createBaseGetMembersRequest() {
    return { Skip: 0, Take: 0 };
}
exports.GetMembersRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.Skip !== 0) {
            writer.uint32(8).int64(message.Skip);
        }
        if (message.Take !== 0) {
            writer.uint32(16).int64(message.Take);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMembersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Skip = longToNumber(reader.int64());
                    break;
                case 2:
                    message.Take = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            Skip: isSet(object.Skip) ? Number(object.Skip) : 0,
            Take: isSet(object.Take) ? Number(object.Take) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.Skip !== undefined && (obj.Skip = Math.round(message.Skip));
        message.Take !== undefined && (obj.Take = Math.round(message.Take));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMembersRequest();
        message.Skip = object.Skip ?? 0;
        message.Take = object.Take ?? 0;
        return message;
    },
};
function createBaseCreateMemberRequest() {
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
exports.CreateMemberRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            timestamp_1.Timestamp.encode(toTimestamp(message.RenewedDate), writer.uint32(66).fork()).ldelim();
        }
        if (message.OverrideExpirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.OverrideExpirationDate), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
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
                    message.MemberShipType = reader.int32();
                    break;
                case 8:
                    message.RenewedDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.OverrideExpirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
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
function createBaseUpdateMemberRequest() {
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
exports.UpdateMemberRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            timestamp_1.Timestamp.encode(toTimestamp(message.RenewedDate), writer.uint32(66).fork()).ldelim();
        }
        if (message.OverrideExpirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.OverrideExpirationDate), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMemberRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Id = longToNumber(reader.int64());
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
                    message.MemberShipType = reader.int32();
                    break;
                case 8:
                    message.RenewedDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.OverrideExpirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
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
function createBaseDeleteMemberRequest() {
    return { MemberId: 0 };
}
exports.DeleteMemberRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.MemberId !== 0) {
            writer.uint32(8).int64(message.MemberId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMemberRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.MemberId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            MemberId: isSet(object.MemberId) ? Number(object.MemberId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.MemberId !== undefined &&
            (obj.MemberId = Math.round(message.MemberId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDeleteMemberRequest();
        message.MemberId = object.MemberId ?? 0;
        return message;
    },
};
function createBaseMember() {
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
exports.Member = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            timestamp_1.Timestamp.encode(toTimestamp(message.RenewedDate), writer.uint32(74).fork()).ldelim();
        }
        if (message.OverrideExpirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.OverrideExpirationDate), writer.uint32(82).fork()).ldelim();
        }
        if (message.Status !== 0) {
            writer.uint32(88).int32(message.Status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Id = longToNumber(reader.int64());
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
                    message.MemberShipType = reader.int32();
                    break;
                case 9:
                    message.RenewedDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.OverrideExpirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.Status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
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
function createBaseGetMemberResponse() {
    return { Member: undefined };
}
exports.GetMemberResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.Member !== undefined) {
            exports.Member.encode(message.Member, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Member = exports.Member.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            Member: isSet(object.Member) ? exports.Member.fromJSON(object.Member) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.Member !== undefined &&
            (obj.Member = message.Member ? exports.Member.toJSON(message.Member) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMemberResponse();
        message.Member =
            object.Member !== undefined && object.Member !== null
                ? exports.Member.fromPartial(object.Member)
                : undefined;
        return message;
    },
};
function createBaseUpdateMemberResponse() {
    return { Member: undefined };
}
exports.UpdateMemberResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.Member !== undefined) {
            exports.Member.encode(message.Member, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Member = exports.Member.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            Member: isSet(object.Member) ? exports.Member.fromJSON(object.Member) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.Member !== undefined &&
            (obj.Member = message.Member ? exports.Member.toJSON(message.Member) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateMemberResponse();
        message.Member =
            object.Member !== undefined && object.Member !== null
                ? exports.Member.fromPartial(object.Member)
                : undefined;
        return message;
    },
};
function createBaseCreateMemberResponse() {
    return { Member: undefined };
}
exports.CreateMemberResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.Member !== undefined) {
            exports.Member.encode(message.Member, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Member = exports.Member.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            Member: isSet(object.Member) ? exports.Member.fromJSON(object.Member) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.Member !== undefined &&
            (obj.Member = message.Member ? exports.Member.toJSON(message.Member) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateMemberResponse();
        message.Member =
            object.Member !== undefined && object.Member !== null
                ? exports.Member.fromPartial(object.Member)
                : undefined;
        return message;
    },
};
function createBaseDeleteMemberResponse() {
    return { Member: undefined };
}
exports.DeleteMemberResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.Member !== undefined) {
            exports.Member.encode(message.Member, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Member = exports.Member.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            Member: isSet(object.Member) ? exports.Member.fromJSON(object.Member) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.Member !== undefined &&
            (obj.Member = message.Member ? exports.Member.toJSON(message.Member) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDeleteMemberResponse();
        message.Member =
            object.Member !== undefined && object.Member !== null
                ? exports.Member.fromPartial(object.Member)
                : undefined;
        return message;
    },
};
function createBaseGetMembersResponse() {
    return { Members: [] };
}
exports.GetMembersResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.Members) {
            exports.Member.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Members.push(exports.Member.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            Members: Array.isArray(object?.Members)
                ? object.Members.map((e) => exports.Member.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Members) {
            obj.Members = message.Members.map((e) => e ? exports.Member.toJSON(e) : undefined);
        }
        else {
            obj.Members = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMembersResponse();
        message.Members = object.Members?.map((e) => exports.Member.fromPartial(e)) || [];
        return message;
    },
};
exports.MembersServiceService = {
    getById: {
        path: "/uptown_runners.members.v1.MembersService/GetById",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetMemberByIdRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetMemberByIdRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetMemberResponse.decode(value),
    },
    getByEmail: {
        path: "/uptown_runners.members.v1.MembersService/GetByEmail",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetMemberByEmailRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetMemberByEmailRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetMemberResponse.decode(value),
    },
    getByNationalIdentifier: {
        path: "/uptown_runners.members.v1.MembersService/GetByNationalIdentifier",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetMemberByNationalIdentifierRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetMemberByNationalIdentifierRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetMemberResponse.decode(value),
    },
    list: {
        path: "/uptown_runners.members.v1.MembersService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetMembersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetMembersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetMembersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetMembersResponse.decode(value),
    },
    create: {
        path: "/uptown_runners.members.v1.MembersService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateMemberRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateMemberRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateMemberResponse.decode(value),
    },
    update: {
        path: "/uptown_runners.members.v1.MembersService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateMemberRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateMemberRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.UpdateMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.UpdateMemberResponse.decode(value),
    },
    delete: {
        path: "/uptown_runners.members.v1.MembersService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteMemberRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteMemberRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.DeleteMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.DeleteMemberResponse.decode(value),
    },
};
exports.MembersServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MembersServiceService, "uptown_runners.members.v1.MembersService");
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    (0, minimal_1.configure)();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
