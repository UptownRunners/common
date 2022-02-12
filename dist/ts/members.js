"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersServiceClient = exports.MembersServiceService = exports.UpdateStatusesResponse = exports.GetMembersResponse = exports.DeleteMemberResponse = exports.CreateMemberResponse = exports.UpdateMemberResponse = exports.GetMemberResponse = exports.Address = exports.Member = exports.UpdateStatusesRequest = exports.DeleteMemberRequest = exports.UpdateMemberRequest = exports.CreateMemberRequest = exports.GetMembersRequest = exports.GetMemberByNationalIdentifierRequest = exports.GetMemberByEmailRequest = exports.GetMemberByIdRequest = exports.membershipStatusToJSON = exports.membershipStatusFromJSON = exports.MembershipStatus = exports.membershipTypeToJSON = exports.membershipTypeFromJSON = exports.MembershipType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = "uptown_runners.members.v2";
var MembershipType;
(function (MembershipType) {
    MembershipType[MembershipType["FULL"] = 0] = "FULL";
    MembershipType[MembershipType["SUPPORT"] = 1] = "SUPPORT";
    MembershipType[MembershipType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MembershipType = exports.MembershipType || (exports.MembershipType = {}));
function membershipTypeFromJSON(object) {
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
exports.membershipTypeFromJSON = membershipTypeFromJSON;
function membershipTypeToJSON(object) {
    switch (object) {
        case MembershipType.FULL:
            return "FULL";
        case MembershipType.SUPPORT:
            return "SUPPORT";
        default:
            return "UNKNOWN";
    }
}
exports.membershipTypeToJSON = membershipTypeToJSON;
var MembershipStatus;
(function (MembershipStatus) {
    MembershipStatus[MembershipStatus["ACTIVE"] = 0] = "ACTIVE";
    MembershipStatus[MembershipStatus["INACTIVE"] = 1] = "INACTIVE";
    MembershipStatus[MembershipStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MembershipStatus = exports.MembershipStatus || (exports.MembershipStatus = {}));
function membershipStatusFromJSON(object) {
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
exports.membershipStatusFromJSON = membershipStatusFromJSON;
function membershipStatusToJSON(object) {
    switch (object) {
        case MembershipStatus.ACTIVE:
            return "ACTIVE";
        case MembershipStatus.INACTIVE:
            return "INACTIVE";
        default:
            return "UNKNOWN";
    }
}
exports.membershipStatusToJSON = membershipStatusToJSON;
function createBaseGetMemberByIdRequest() {
    return { id: 0 };
}
exports.GetMemberByIdRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMemberByIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.int64());
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
            id: isSet(object.id) ? Number(object.id) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMemberByIdRequest();
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseGetMemberByEmailRequest() {
    return { email: "" };
}
exports.GetMemberByEmailRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            email: isSet(object.email) ? String(object.email) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.email !== undefined && (obj.email = message.email);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMemberByEmailRequest();
        message.email = object.email ?? "";
        return message;
    },
};
function createBaseGetMemberByNationalIdentifierRequest() {
    return { nationalIdentifier: "" };
}
exports.GetMemberByNationalIdentifierRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nationalIdentifier !== "") {
            writer.uint32(10).string(message.nationalIdentifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMemberByNationalIdentifierRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nationalIdentifier = reader.string();
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
            nationalIdentifier: isSet(object.nationalIdentifier)
                ? String(object.nationalIdentifier)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nationalIdentifier !== undefined &&
            (obj.nationalIdentifier = message.nationalIdentifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMemberByNationalIdentifierRequest();
        message.nationalIdentifier = object.nationalIdentifier ?? "";
        return message;
    },
};
function createBaseGetMembersRequest() {
    return { skip: undefined, take: undefined };
}
exports.GetMembersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.skip !== undefined) {
            writer.uint32(8).int64(message.skip);
        }
        if (message.take !== undefined) {
            writer.uint32(16).int64(message.take);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMembersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.skip = longToNumber(reader.int64());
                    break;
                case 2:
                    message.take = longToNumber(reader.int64());
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
            skip: isSet(object.skip) ? Number(object.skip) : undefined,
            take: isSet(object.take) ? Number(object.take) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.skip !== undefined && (obj.skip = Math.round(message.skip));
        message.take !== undefined && (obj.take = Math.round(message.take));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMembersRequest();
        message.skip = object.skip ?? undefined;
        message.take = object.take ?? undefined;
        return message;
    },
};
function createBaseCreateMemberRequest() {
    return {
        nationalIdentifier: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: undefined,
        membershipType: 0,
        renewedDate: undefined,
        overrideExpirationDate: undefined,
    };
}
exports.CreateMemberRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nationalIdentifier !== "") {
            writer.uint32(10).string(message.nationalIdentifier);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.firstName !== "") {
            writer.uint32(26).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(34).string(message.lastName);
        }
        if (message.phoneNumber !== "") {
            writer.uint32(42).string(message.phoneNumber);
        }
        if (message.address !== undefined) {
            exports.Address.encode(message.address, writer.uint32(50).fork()).ldelim();
        }
        if (message.membershipType !== 0) {
            writer.uint32(56).int32(message.membershipType);
        }
        if (message.renewedDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.renewedDate), writer.uint32(66).fork()).ldelim();
        }
        if (message.overrideExpirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.overrideExpirationDate), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMemberRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nationalIdentifier = reader.string();
                    break;
                case 2:
                    message.email = reader.string();
                    break;
                case 3:
                    message.firstName = reader.string();
                    break;
                case 4:
                    message.lastName = reader.string();
                    break;
                case 5:
                    message.phoneNumber = reader.string();
                    break;
                case 6:
                    message.address = exports.Address.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.membershipType = reader.int32();
                    break;
                case 8:
                    message.renewedDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.overrideExpirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            nationalIdentifier: isSet(object.nationalIdentifier)
                ? String(object.nationalIdentifier)
                : "",
            email: isSet(object.email) ? String(object.email) : "",
            firstName: isSet(object.firstName) ? String(object.firstName) : "",
            lastName: isSet(object.lastName) ? String(object.lastName) : "",
            phoneNumber: isSet(object.phoneNumber) ? String(object.phoneNumber) : "",
            address: isSet(object.address)
                ? exports.Address.fromJSON(object.address)
                : undefined,
            membershipType: isSet(object.membershipType)
                ? membershipTypeFromJSON(object.membershipType)
                : 0,
            renewedDate: isSet(object.renewedDate)
                ? fromJsonTimestamp(object.renewedDate)
                : undefined,
            overrideExpirationDate: isSet(object.overrideExpirationDate)
                ? fromJsonTimestamp(object.overrideExpirationDate)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.nationalIdentifier !== undefined &&
            (obj.nationalIdentifier = message.nationalIdentifier);
        message.email !== undefined && (obj.email = message.email);
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.phoneNumber !== undefined &&
            (obj.phoneNumber = message.phoneNumber);
        message.address !== undefined &&
            (obj.address = message.address
                ? exports.Address.toJSON(message.address)
                : undefined);
        message.membershipType !== undefined &&
            (obj.membershipType = membershipTypeToJSON(message.membershipType));
        message.renewedDate !== undefined &&
            (obj.renewedDate = message.renewedDate.toISOString());
        message.overrideExpirationDate !== undefined &&
            (obj.overrideExpirationDate =
                message.overrideExpirationDate.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateMemberRequest();
        message.nationalIdentifier = object.nationalIdentifier ?? "";
        message.email = object.email ?? "";
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.phoneNumber = object.phoneNumber ?? "";
        message.address =
            object.address !== undefined && object.address !== null
                ? exports.Address.fromPartial(object.address)
                : undefined;
        message.membershipType = object.membershipType ?? 0;
        message.renewedDate = object.renewedDate ?? undefined;
        message.overrideExpirationDate = object.overrideExpirationDate ?? undefined;
        return message;
    },
};
function createBaseUpdateMemberRequest() {
    return {
        id: 0,
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: undefined,
        membershipType: 0,
        renewedDate: undefined,
        overrideExpirationDate: undefined,
        deactivated: false,
    };
}
exports.UpdateMemberRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.firstName !== "") {
            writer.uint32(26).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(34).string(message.lastName);
        }
        if (message.phoneNumber !== "") {
            writer.uint32(42).string(message.phoneNumber);
        }
        if (message.address !== undefined) {
            exports.Address.encode(message.address, writer.uint32(50).fork()).ldelim();
        }
        if (message.membershipType !== 0) {
            writer.uint32(56).int32(message.membershipType);
        }
        if (message.renewedDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.renewedDate), writer.uint32(66).fork()).ldelim();
        }
        if (message.overrideExpirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.overrideExpirationDate), writer.uint32(74).fork()).ldelim();
        }
        if (message.deactivated === true) {
            writer.uint32(80).bool(message.deactivated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMemberRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.int64());
                    break;
                case 2:
                    message.email = reader.string();
                    break;
                case 3:
                    message.firstName = reader.string();
                    break;
                case 4:
                    message.lastName = reader.string();
                    break;
                case 5:
                    message.phoneNumber = reader.string();
                    break;
                case 6:
                    message.address = exports.Address.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.membershipType = reader.int32();
                    break;
                case 8:
                    message.renewedDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.overrideExpirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? Number(object.id) : 0,
            email: isSet(object.email) ? String(object.email) : "",
            firstName: isSet(object.firstName) ? String(object.firstName) : "",
            lastName: isSet(object.lastName) ? String(object.lastName) : "",
            phoneNumber: isSet(object.phoneNumber) ? String(object.phoneNumber) : "",
            address: isSet(object.address)
                ? exports.Address.fromJSON(object.address)
                : undefined,
            membershipType: isSet(object.membershipType)
                ? membershipTypeFromJSON(object.membershipType)
                : 0,
            renewedDate: isSet(object.renewedDate)
                ? fromJsonTimestamp(object.renewedDate)
                : undefined,
            overrideExpirationDate: isSet(object.overrideExpirationDate)
                ? fromJsonTimestamp(object.overrideExpirationDate)
                : undefined,
            deactivated: isSet(object.deactivated)
                ? Boolean(object.deactivated)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.email !== undefined && (obj.email = message.email);
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.phoneNumber !== undefined &&
            (obj.phoneNumber = message.phoneNumber);
        message.address !== undefined &&
            (obj.address = message.address
                ? exports.Address.toJSON(message.address)
                : undefined);
        message.membershipType !== undefined &&
            (obj.membershipType = membershipTypeToJSON(message.membershipType));
        message.renewedDate !== undefined &&
            (obj.renewedDate = message.renewedDate.toISOString());
        message.overrideExpirationDate !== undefined &&
            (obj.overrideExpirationDate =
                message.overrideExpirationDate.toISOString());
        message.deactivated !== undefined &&
            (obj.deactivated = message.deactivated);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateMemberRequest();
        message.id = object.id ?? 0;
        message.email = object.email ?? "";
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.phoneNumber = object.phoneNumber ?? "";
        message.address =
            object.address !== undefined && object.address !== null
                ? exports.Address.fromPartial(object.address)
                : undefined;
        message.membershipType = object.membershipType ?? 0;
        message.renewedDate = object.renewedDate ?? undefined;
        message.overrideExpirationDate = object.overrideExpirationDate ?? undefined;
        message.deactivated = object.deactivated ?? false;
        return message;
    },
};
function createBaseDeleteMemberRequest() {
    return { memberId: 0 };
}
exports.DeleteMemberRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.memberId !== 0) {
            writer.uint32(8).int64(message.memberId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMemberRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memberId = longToNumber(reader.int64());
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
            memberId: isSet(object.memberId) ? Number(object.memberId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.memberId !== undefined &&
            (obj.memberId = Math.round(message.memberId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDeleteMemberRequest();
        message.memberId = object.memberId ?? 0;
        return message;
    },
};
function createBaseUpdateStatusesRequest() {
    return {};
}
exports.UpdateStatusesRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseUpdateStatusesRequest();
        return message;
    },
};
function createBaseMember() {
    return {
        id: 0,
        nationalIdentifier: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: undefined,
        membershipType: 0,
        renewedDate: undefined,
        overrideExpirationDate: undefined,
        status: 0,
        deactivated: false,
    };
}
exports.Member = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.nationalIdentifier !== "") {
            writer.uint32(18).string(message.nationalIdentifier);
        }
        if (message.email !== "") {
            writer.uint32(26).string(message.email);
        }
        if (message.firstName !== "") {
            writer.uint32(34).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(42).string(message.lastName);
        }
        if (message.phoneNumber !== "") {
            writer.uint32(50).string(message.phoneNumber);
        }
        if (message.address !== undefined) {
            exports.Address.encode(message.address, writer.uint32(58).fork()).ldelim();
        }
        if (message.membershipType !== 0) {
            writer.uint32(64).int32(message.membershipType);
        }
        if (message.renewedDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.renewedDate), writer.uint32(74).fork()).ldelim();
        }
        if (message.overrideExpirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.overrideExpirationDate), writer.uint32(82).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        if (message.deactivated === true) {
            writer.uint32(96).bool(message.deactivated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.int64());
                    break;
                case 2:
                    message.nationalIdentifier = reader.string();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                case 4:
                    message.firstName = reader.string();
                    break;
                case 5:
                    message.lastName = reader.string();
                    break;
                case 6:
                    message.phoneNumber = reader.string();
                    break;
                case 7:
                    message.address = exports.Address.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.membershipType = reader.int32();
                    break;
                case 9:
                    message.renewedDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.overrideExpirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.status = reader.int32();
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? Number(object.id) : 0,
            nationalIdentifier: isSet(object.nationalIdentifier)
                ? String(object.nationalIdentifier)
                : "",
            email: isSet(object.email) ? String(object.email) : "",
            firstName: isSet(object.firstName) ? String(object.firstName) : "",
            lastName: isSet(object.lastName) ? String(object.lastName) : "",
            phoneNumber: isSet(object.phoneNumber) ? String(object.phoneNumber) : "",
            address: isSet(object.address)
                ? exports.Address.fromJSON(object.address)
                : undefined,
            membershipType: isSet(object.membershipType)
                ? membershipTypeFromJSON(object.membershipType)
                : 0,
            renewedDate: isSet(object.renewedDate)
                ? fromJsonTimestamp(object.renewedDate)
                : undefined,
            overrideExpirationDate: isSet(object.overrideExpirationDate)
                ? fromJsonTimestamp(object.overrideExpirationDate)
                : undefined,
            status: isSet(object.status)
                ? membershipStatusFromJSON(object.status)
                : 0,
            deactivated: isSet(object.deactivated)
                ? Boolean(object.deactivated)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.nationalIdentifier !== undefined &&
            (obj.nationalIdentifier = message.nationalIdentifier);
        message.email !== undefined && (obj.email = message.email);
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.phoneNumber !== undefined &&
            (obj.phoneNumber = message.phoneNumber);
        message.address !== undefined &&
            (obj.address = message.address
                ? exports.Address.toJSON(message.address)
                : undefined);
        message.membershipType !== undefined &&
            (obj.membershipType = membershipTypeToJSON(message.membershipType));
        message.renewedDate !== undefined &&
            (obj.renewedDate = message.renewedDate.toISOString());
        message.overrideExpirationDate !== undefined &&
            (obj.overrideExpirationDate =
                message.overrideExpirationDate.toISOString());
        message.status !== undefined &&
            (obj.status = membershipStatusToJSON(message.status));
        message.deactivated !== undefined &&
            (obj.deactivated = message.deactivated);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMember();
        message.id = object.id ?? 0;
        message.nationalIdentifier = object.nationalIdentifier ?? "";
        message.email = object.email ?? "";
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.phoneNumber = object.phoneNumber ?? "";
        message.address =
            object.address !== undefined && object.address !== null
                ? exports.Address.fromPartial(object.address)
                : undefined;
        message.membershipType = object.membershipType ?? 0;
        message.renewedDate = object.renewedDate ?? undefined;
        message.overrideExpirationDate = object.overrideExpirationDate ?? undefined;
        message.status = object.status ?? 0;
        message.deactivated = object.deactivated ?? false;
        return message;
    },
};
function createBaseAddress() {
    return { street: "", postalCode: "", city: "", country: "" };
}
exports.Address = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.street !== "") {
            writer.uint32(10).string(message.street);
        }
        if (message.postalCode !== "") {
            writer.uint32(18).string(message.postalCode);
        }
        if (message.city !== "") {
            writer.uint32(26).string(message.city);
        }
        if (message.country !== "") {
            writer.uint32(34).string(message.country);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.street = reader.string();
                    break;
                case 2:
                    message.postalCode = reader.string();
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
    fromJSON(object) {
        return {
            street: isSet(object.street) ? String(object.street) : "",
            postalCode: isSet(object.postalCode) ? String(object.postalCode) : "",
            city: isSet(object.city) ? String(object.city) : "",
            country: isSet(object.country) ? String(object.country) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.street !== undefined && (obj.street = message.street);
        message.postalCode !== undefined && (obj.postalCode = message.postalCode);
        message.city !== undefined && (obj.city = message.city);
        message.country !== undefined && (obj.country = message.country);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddress();
        message.street = object.street ?? "";
        message.postalCode = object.postalCode ?? "";
        message.city = object.city ?? "";
        message.country = object.country ?? "";
        return message;
    },
};
function createBaseGetMemberResponse() {
    return { member: undefined };
}
exports.GetMemberResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.member !== undefined) {
            exports.Member.encode(message.member, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.member = exports.Member.decode(reader, reader.uint32());
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
            member: isSet(object.member) ? exports.Member.fromJSON(object.member) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.member !== undefined &&
            (obj.member = message.member ? exports.Member.toJSON(message.member) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMemberResponse();
        message.member =
            object.member !== undefined && object.member !== null
                ? exports.Member.fromPartial(object.member)
                : undefined;
        return message;
    },
};
function createBaseUpdateMemberResponse() {
    return { member: undefined };
}
exports.UpdateMemberResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.member !== undefined) {
            exports.Member.encode(message.member, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.member = exports.Member.decode(reader, reader.uint32());
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
            member: isSet(object.member) ? exports.Member.fromJSON(object.member) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.member !== undefined &&
            (obj.member = message.member ? exports.Member.toJSON(message.member) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateMemberResponse();
        message.member =
            object.member !== undefined && object.member !== null
                ? exports.Member.fromPartial(object.member)
                : undefined;
        return message;
    },
};
function createBaseCreateMemberResponse() {
    return { member: undefined };
}
exports.CreateMemberResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.member !== undefined) {
            exports.Member.encode(message.member, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.member = exports.Member.decode(reader, reader.uint32());
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
            member: isSet(object.member) ? exports.Member.fromJSON(object.member) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.member !== undefined &&
            (obj.member = message.member ? exports.Member.toJSON(message.member) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateMemberResponse();
        message.member =
            object.member !== undefined && object.member !== null
                ? exports.Member.fromPartial(object.member)
                : undefined;
        return message;
    },
};
function createBaseDeleteMemberResponse() {
    return { member: undefined };
}
exports.DeleteMemberResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.member !== undefined) {
            exports.Member.encode(message.member, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.member = exports.Member.decode(reader, reader.uint32());
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
            member: isSet(object.member) ? exports.Member.fromJSON(object.member) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.member !== undefined &&
            (obj.member = message.member ? exports.Member.toJSON(message.member) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDeleteMemberResponse();
        message.member =
            object.member !== undefined && object.member !== null
                ? exports.Member.fromPartial(object.member)
                : undefined;
        return message;
    },
};
function createBaseGetMembersResponse() {
    return { members: [] };
}
exports.GetMembersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.members) {
            exports.Member.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(exports.Member.decode(reader, reader.uint32()));
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
            members: Array.isArray(object?.members)
                ? object.members.map((e) => exports.Member.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map((e) => e ? exports.Member.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMembersResponse();
        message.members = object.members?.map((e) => exports.Member.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUpdateStatusesResponse() {
    return { success: false, errorMessage: "" };
}
exports.UpdateStatusesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        if (message.errorMessage !== "") {
            writer.uint32(18).string(message.errorMessage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateStatusesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                case 2:
                    message.errorMessage = reader.string();
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
            success: isSet(object.success) ? Boolean(object.success) : false,
            errorMessage: isSet(object.errorMessage)
                ? String(object.errorMessage)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        message.errorMessage !== undefined &&
            (obj.errorMessage = message.errorMessage);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateStatusesResponse();
        message.success = object.success ?? false;
        message.errorMessage = object.errorMessage ?? "";
        return message;
    },
};
exports.MembersServiceService = {
    getById: {
        path: "/uptown_runners.members.v2.MembersService/GetById",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetMemberByIdRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetMemberByIdRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetMemberResponse.decode(value),
    },
    getByEmail: {
        path: "/uptown_runners.members.v2.MembersService/GetByEmail",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetMemberByEmailRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetMemberByEmailRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetMemberResponse.decode(value),
    },
    getByNationalIdentifier: {
        path: "/uptown_runners.members.v2.MembersService/GetByNationalIdentifier",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetMemberByNationalIdentifierRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetMemberByNationalIdentifierRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetMemberResponse.decode(value),
    },
    list: {
        path: "/uptown_runners.members.v2.MembersService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetMembersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetMembersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetMembersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetMembersResponse.decode(value),
    },
    create: {
        path: "/uptown_runners.members.v2.MembersService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateMemberRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateMemberRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateMemberResponse.decode(value),
    },
    update: {
        path: "/uptown_runners.members.v2.MembersService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateMemberRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateMemberRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.UpdateMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.UpdateMemberResponse.decode(value),
    },
    delete: {
        path: "/uptown_runners.members.v2.MembersService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteMemberRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteMemberRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.DeleteMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.DeleteMemberResponse.decode(value),
    },
    updateStatuses: {
        path: "/uptown_runners.members.v2.MembersService/UpdateStatuses",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateStatusesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateStatusesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.UpdateStatusesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.UpdateStatusesResponse.decode(value),
    },
};
exports.MembersServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MembersServiceService, "uptown_runners.members.v2.MembersService");
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
