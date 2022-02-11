"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampRules = exports.DurationRules = exports.AnyRules = exports.MapRules = exports.RepeatedRules = exports.MessageRules = exports.EnumRules = exports.BytesRules = exports.StringRules = exports.BoolRules = exports.SFixed64Rules = exports.SFixed32Rules = exports.Fixed64Rules = exports.Fixed32Rules = exports.SInt64Rules = exports.SInt32Rules = exports.UInt64Rules = exports.UInt32Rules = exports.Int64Rules = exports.Int32Rules = exports.DoubleRules = exports.FloatRules = exports.FieldRules = exports.knownRegexToJSON = exports.knownRegexFromJSON = exports.KnownRegex = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../google/protobuf/timestamp");
const duration_1 = require("../google/protobuf/duration");
exports.protobufPackage = "validate";
/** WellKnownRegex contain some well-known patterns. */
var KnownRegex;
(function (KnownRegex) {
    KnownRegex[KnownRegex["UNKNOWN"] = 0] = "UNKNOWN";
    /** HTTP_HEADER_NAME - HTTP header name as defined by RFC 7230. */
    KnownRegex[KnownRegex["HTTP_HEADER_NAME"] = 1] = "HTTP_HEADER_NAME";
    /** HTTP_HEADER_VALUE - HTTP header value as defined by RFC 7230. */
    KnownRegex[KnownRegex["HTTP_HEADER_VALUE"] = 2] = "HTTP_HEADER_VALUE";
    KnownRegex[KnownRegex["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KnownRegex = exports.KnownRegex || (exports.KnownRegex = {}));
function knownRegexFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return KnownRegex.UNKNOWN;
        case 1:
        case "HTTP_HEADER_NAME":
            return KnownRegex.HTTP_HEADER_NAME;
        case 2:
        case "HTTP_HEADER_VALUE":
            return KnownRegex.HTTP_HEADER_VALUE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return KnownRegex.UNRECOGNIZED;
    }
}
exports.knownRegexFromJSON = knownRegexFromJSON;
function knownRegexToJSON(object) {
    switch (object) {
        case KnownRegex.UNKNOWN:
            return "UNKNOWN";
        case KnownRegex.HTTP_HEADER_NAME:
            return "HTTP_HEADER_NAME";
        case KnownRegex.HTTP_HEADER_VALUE:
            return "HTTP_HEADER_VALUE";
        default:
            return "UNKNOWN";
    }
}
exports.knownRegexToJSON = knownRegexToJSON;
function createBaseFieldRules() {
    return {
        message: undefined,
        float: undefined,
        double: undefined,
        int32: undefined,
        int64: undefined,
        uint32: undefined,
        uint64: undefined,
        sint32: undefined,
        sint64: undefined,
        fixed32: undefined,
        fixed64: undefined,
        sfixed32: undefined,
        sfixed64: undefined,
        bool: undefined,
        string: undefined,
        bytes: undefined,
        enum: undefined,
        repeated: undefined,
        map: undefined,
        any: undefined,
        duration: undefined,
        timestamp: undefined,
    };
}
exports.FieldRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.message !== undefined) {
            exports.MessageRules.encode(message.message, writer.uint32(138).fork()).ldelim();
        }
        if (message.float !== undefined) {
            exports.FloatRules.encode(message.float, writer.uint32(10).fork()).ldelim();
        }
        if (message.double !== undefined) {
            exports.DoubleRules.encode(message.double, writer.uint32(18).fork()).ldelim();
        }
        if (message.int32 !== undefined) {
            exports.Int32Rules.encode(message.int32, writer.uint32(26).fork()).ldelim();
        }
        if (message.int64 !== undefined) {
            exports.Int64Rules.encode(message.int64, writer.uint32(34).fork()).ldelim();
        }
        if (message.uint32 !== undefined) {
            exports.UInt32Rules.encode(message.uint32, writer.uint32(42).fork()).ldelim();
        }
        if (message.uint64 !== undefined) {
            exports.UInt64Rules.encode(message.uint64, writer.uint32(50).fork()).ldelim();
        }
        if (message.sint32 !== undefined) {
            exports.SInt32Rules.encode(message.sint32, writer.uint32(58).fork()).ldelim();
        }
        if (message.sint64 !== undefined) {
            exports.SInt64Rules.encode(message.sint64, writer.uint32(66).fork()).ldelim();
        }
        if (message.fixed32 !== undefined) {
            exports.Fixed32Rules.encode(message.fixed32, writer.uint32(74).fork()).ldelim();
        }
        if (message.fixed64 !== undefined) {
            exports.Fixed64Rules.encode(message.fixed64, writer.uint32(82).fork()).ldelim();
        }
        if (message.sfixed32 !== undefined) {
            exports.SFixed32Rules.encode(message.sfixed32, writer.uint32(90).fork()).ldelim();
        }
        if (message.sfixed64 !== undefined) {
            exports.SFixed64Rules.encode(message.sfixed64, writer.uint32(98).fork()).ldelim();
        }
        if (message.bool !== undefined) {
            exports.BoolRules.encode(message.bool, writer.uint32(106).fork()).ldelim();
        }
        if (message.string !== undefined) {
            exports.StringRules.encode(message.string, writer.uint32(114).fork()).ldelim();
        }
        if (message.bytes !== undefined) {
            exports.BytesRules.encode(message.bytes, writer.uint32(122).fork()).ldelim();
        }
        if (message.enum !== undefined) {
            exports.EnumRules.encode(message.enum, writer.uint32(130).fork()).ldelim();
        }
        if (message.repeated !== undefined) {
            exports.RepeatedRules.encode(message.repeated, writer.uint32(146).fork()).ldelim();
        }
        if (message.map !== undefined) {
            exports.MapRules.encode(message.map, writer.uint32(154).fork()).ldelim();
        }
        if (message.any !== undefined) {
            exports.AnyRules.encode(message.any, writer.uint32(162).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            exports.DurationRules.encode(message.duration, writer.uint32(170).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            exports.TimestampRules.encode(message.timestamp, writer.uint32(178).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 17:
                    message.message = exports.MessageRules.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.float = exports.FloatRules.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.double = exports.DoubleRules.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.int32 = exports.Int32Rules.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.int64 = exports.Int64Rules.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.uint32 = exports.UInt32Rules.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.uint64 = exports.UInt64Rules.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.sint32 = exports.SInt32Rules.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.sint64 = exports.SInt64Rules.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.fixed32 = exports.Fixed32Rules.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.fixed64 = exports.Fixed64Rules.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.sfixed32 = exports.SFixed32Rules.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.sfixed64 = exports.SFixed64Rules.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.bool = exports.BoolRules.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.string = exports.StringRules.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.bytes = exports.BytesRules.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.enum = exports.EnumRules.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.repeated = exports.RepeatedRules.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.map = exports.MapRules.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.any = exports.AnyRules.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.duration = exports.DurationRules.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.timestamp = exports.TimestampRules.decode(reader, reader.uint32());
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
            message: isSet(object.message)
                ? exports.MessageRules.fromJSON(object.message)
                : undefined,
            float: isSet(object.float)
                ? exports.FloatRules.fromJSON(object.float)
                : undefined,
            double: isSet(object.double)
                ? exports.DoubleRules.fromJSON(object.double)
                : undefined,
            int32: isSet(object.int32)
                ? exports.Int32Rules.fromJSON(object.int32)
                : undefined,
            int64: isSet(object.int64)
                ? exports.Int64Rules.fromJSON(object.int64)
                : undefined,
            uint32: isSet(object.uint32)
                ? exports.UInt32Rules.fromJSON(object.uint32)
                : undefined,
            uint64: isSet(object.uint64)
                ? exports.UInt64Rules.fromJSON(object.uint64)
                : undefined,
            sint32: isSet(object.sint32)
                ? exports.SInt32Rules.fromJSON(object.sint32)
                : undefined,
            sint64: isSet(object.sint64)
                ? exports.SInt64Rules.fromJSON(object.sint64)
                : undefined,
            fixed32: isSet(object.fixed32)
                ? exports.Fixed32Rules.fromJSON(object.fixed32)
                : undefined,
            fixed64: isSet(object.fixed64)
                ? exports.Fixed64Rules.fromJSON(object.fixed64)
                : undefined,
            sfixed32: isSet(object.sfixed32)
                ? exports.SFixed32Rules.fromJSON(object.sfixed32)
                : undefined,
            sfixed64: isSet(object.sfixed64)
                ? exports.SFixed64Rules.fromJSON(object.sfixed64)
                : undefined,
            bool: isSet(object.bool) ? exports.BoolRules.fromJSON(object.bool) : undefined,
            string: isSet(object.string)
                ? exports.StringRules.fromJSON(object.string)
                : undefined,
            bytes: isSet(object.bytes)
                ? exports.BytesRules.fromJSON(object.bytes)
                : undefined,
            enum: isSet(object.enum) ? exports.EnumRules.fromJSON(object.enum) : undefined,
            repeated: isSet(object.repeated)
                ? exports.RepeatedRules.fromJSON(object.repeated)
                : undefined,
            map: isSet(object.map) ? exports.MapRules.fromJSON(object.map) : undefined,
            any: isSet(object.any) ? exports.AnyRules.fromJSON(object.any) : undefined,
            duration: isSet(object.duration)
                ? exports.DurationRules.fromJSON(object.duration)
                : undefined,
            timestamp: isSet(object.timestamp)
                ? exports.TimestampRules.fromJSON(object.timestamp)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined &&
            (obj.message = message.message
                ? exports.MessageRules.toJSON(message.message)
                : undefined);
        message.float !== undefined &&
            (obj.float = message.float
                ? exports.FloatRules.toJSON(message.float)
                : undefined);
        message.double !== undefined &&
            (obj.double = message.double
                ? exports.DoubleRules.toJSON(message.double)
                : undefined);
        message.int32 !== undefined &&
            (obj.int32 = message.int32
                ? exports.Int32Rules.toJSON(message.int32)
                : undefined);
        message.int64 !== undefined &&
            (obj.int64 = message.int64
                ? exports.Int64Rules.toJSON(message.int64)
                : undefined);
        message.uint32 !== undefined &&
            (obj.uint32 = message.uint32
                ? exports.UInt32Rules.toJSON(message.uint32)
                : undefined);
        message.uint64 !== undefined &&
            (obj.uint64 = message.uint64
                ? exports.UInt64Rules.toJSON(message.uint64)
                : undefined);
        message.sint32 !== undefined &&
            (obj.sint32 = message.sint32
                ? exports.SInt32Rules.toJSON(message.sint32)
                : undefined);
        message.sint64 !== undefined &&
            (obj.sint64 = message.sint64
                ? exports.SInt64Rules.toJSON(message.sint64)
                : undefined);
        message.fixed32 !== undefined &&
            (obj.fixed32 = message.fixed32
                ? exports.Fixed32Rules.toJSON(message.fixed32)
                : undefined);
        message.fixed64 !== undefined &&
            (obj.fixed64 = message.fixed64
                ? exports.Fixed64Rules.toJSON(message.fixed64)
                : undefined);
        message.sfixed32 !== undefined &&
            (obj.sfixed32 = message.sfixed32
                ? exports.SFixed32Rules.toJSON(message.sfixed32)
                : undefined);
        message.sfixed64 !== undefined &&
            (obj.sfixed64 = message.sfixed64
                ? exports.SFixed64Rules.toJSON(message.sfixed64)
                : undefined);
        message.bool !== undefined &&
            (obj.bool = message.bool ? exports.BoolRules.toJSON(message.bool) : undefined);
        message.string !== undefined &&
            (obj.string = message.string
                ? exports.StringRules.toJSON(message.string)
                : undefined);
        message.bytes !== undefined &&
            (obj.bytes = message.bytes
                ? exports.BytesRules.toJSON(message.bytes)
                : undefined);
        message.enum !== undefined &&
            (obj.enum = message.enum ? exports.EnumRules.toJSON(message.enum) : undefined);
        message.repeated !== undefined &&
            (obj.repeated = message.repeated
                ? exports.RepeatedRules.toJSON(message.repeated)
                : undefined);
        message.map !== undefined &&
            (obj.map = message.map ? exports.MapRules.toJSON(message.map) : undefined);
        message.any !== undefined &&
            (obj.any = message.any ? exports.AnyRules.toJSON(message.any) : undefined);
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? exports.DurationRules.toJSON(message.duration)
                : undefined);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp
                ? exports.TimestampRules.toJSON(message.timestamp)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFieldRules();
        message.message =
            object.message !== undefined && object.message !== null
                ? exports.MessageRules.fromPartial(object.message)
                : undefined;
        message.float =
            object.float !== undefined && object.float !== null
                ? exports.FloatRules.fromPartial(object.float)
                : undefined;
        message.double =
            object.double !== undefined && object.double !== null
                ? exports.DoubleRules.fromPartial(object.double)
                : undefined;
        message.int32 =
            object.int32 !== undefined && object.int32 !== null
                ? exports.Int32Rules.fromPartial(object.int32)
                : undefined;
        message.int64 =
            object.int64 !== undefined && object.int64 !== null
                ? exports.Int64Rules.fromPartial(object.int64)
                : undefined;
        message.uint32 =
            object.uint32 !== undefined && object.uint32 !== null
                ? exports.UInt32Rules.fromPartial(object.uint32)
                : undefined;
        message.uint64 =
            object.uint64 !== undefined && object.uint64 !== null
                ? exports.UInt64Rules.fromPartial(object.uint64)
                : undefined;
        message.sint32 =
            object.sint32 !== undefined && object.sint32 !== null
                ? exports.SInt32Rules.fromPartial(object.sint32)
                : undefined;
        message.sint64 =
            object.sint64 !== undefined && object.sint64 !== null
                ? exports.SInt64Rules.fromPartial(object.sint64)
                : undefined;
        message.fixed32 =
            object.fixed32 !== undefined && object.fixed32 !== null
                ? exports.Fixed32Rules.fromPartial(object.fixed32)
                : undefined;
        message.fixed64 =
            object.fixed64 !== undefined && object.fixed64 !== null
                ? exports.Fixed64Rules.fromPartial(object.fixed64)
                : undefined;
        message.sfixed32 =
            object.sfixed32 !== undefined && object.sfixed32 !== null
                ? exports.SFixed32Rules.fromPartial(object.sfixed32)
                : undefined;
        message.sfixed64 =
            object.sfixed64 !== undefined && object.sfixed64 !== null
                ? exports.SFixed64Rules.fromPartial(object.sfixed64)
                : undefined;
        message.bool =
            object.bool !== undefined && object.bool !== null
                ? exports.BoolRules.fromPartial(object.bool)
                : undefined;
        message.string =
            object.string !== undefined && object.string !== null
                ? exports.StringRules.fromPartial(object.string)
                : undefined;
        message.bytes =
            object.bytes !== undefined && object.bytes !== null
                ? exports.BytesRules.fromPartial(object.bytes)
                : undefined;
        message.enum =
            object.enum !== undefined && object.enum !== null
                ? exports.EnumRules.fromPartial(object.enum)
                : undefined;
        message.repeated =
            object.repeated !== undefined && object.repeated !== null
                ? exports.RepeatedRules.fromPartial(object.repeated)
                : undefined;
        message.map =
            object.map !== undefined && object.map !== null
                ? exports.MapRules.fromPartial(object.map)
                : undefined;
        message.any =
            object.any !== undefined && object.any !== null
                ? exports.AnyRules.fromPartial(object.any)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? exports.DurationRules.fromPartial(object.duration)
                : undefined;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? exports.TimestampRules.fromPartial(object.timestamp)
                : undefined;
        return message;
    },
};
function createBaseFloatRules() {
    return {
        const: 0,
        lt: 0,
        lte: 0,
        gt: 0,
        gte: 0,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.FloatRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(13).float(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(21).float(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(29).float(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(37).float(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(45).float(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.float(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.float(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFloatRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = reader.float();
                    break;
                case 2:
                    message.lt = reader.float();
                    break;
                case 3:
                    message.lte = reader.float();
                    break;
                case 4:
                    message.gt = reader.float();
                    break;
                case 5:
                    message.gte = reader.float();
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.float());
                        }
                    }
                    else {
                        message.in.push(reader.float());
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.float());
                        }
                    }
                    else {
                        message.notIn.push(reader.float());
                    }
                    break;
                case 8:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = message.const);
        message.lt !== undefined && (obj.lt = message.lt);
        message.lte !== undefined && (obj.lte = message.lte);
        message.gt !== undefined && (obj.gt = message.gt);
        message.gte !== undefined && (obj.gte = message.gte);
        if (message.in) {
            obj.in = message.in.map((e) => e);
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => e);
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFloatRules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseDoubleRules() {
    return {
        const: 0,
        lt: 0,
        lte: 0,
        gt: 0,
        gte: 0,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.DoubleRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(9).double(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(17).double(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(25).double(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(33).double(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(41).double(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.double(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.double(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDoubleRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = reader.double();
                    break;
                case 2:
                    message.lt = reader.double();
                    break;
                case 3:
                    message.lte = reader.double();
                    break;
                case 4:
                    message.gt = reader.double();
                    break;
                case 5:
                    message.gte = reader.double();
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.double());
                        }
                    }
                    else {
                        message.in.push(reader.double());
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.double());
                        }
                    }
                    else {
                        message.notIn.push(reader.double());
                    }
                    break;
                case 8:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = message.const);
        message.lt !== undefined && (obj.lt = message.lt);
        message.lte !== undefined && (obj.lte = message.lte);
        message.gt !== undefined && (obj.gt = message.gt);
        message.gte !== undefined && (obj.gte = message.gte);
        if (message.in) {
            obj.in = message.in.map((e) => e);
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => e);
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDoubleRules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseInt32Rules() {
    return {
        const: 0,
        lt: 0,
        lte: 0,
        gt: 0,
        gte: 0,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.Int32Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(8).int32(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(16).int32(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(24).int32(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(32).int32(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(40).int32(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInt32Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = reader.int32();
                    break;
                case 2:
                    message.lt = reader.int32();
                    break;
                case 3:
                    message.lte = reader.int32();
                    break;
                case 4:
                    message.gt = reader.int32();
                    break;
                case 5:
                    message.gte = reader.int32();
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.int32());
                        }
                    }
                    else {
                        message.in.push(reader.int32());
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.int32());
                        }
                    }
                    else {
                        message.notIn.push(reader.int32());
                    }
                    break;
                case 8:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInt32Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseInt64Rules() {
    return {
        const: 0,
        lt: 0,
        lte: 0,
        gt: 0,
        gte: 0,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.Int64Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(8).int64(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(16).int64(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(24).int64(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(32).int64(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(40).int64(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.int64(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInt64Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = longToNumber(reader.int64());
                    break;
                case 2:
                    message.lt = longToNumber(reader.int64());
                    break;
                case 3:
                    message.lte = longToNumber(reader.int64());
                    break;
                case 4:
                    message.gt = longToNumber(reader.int64());
                    break;
                case 5:
                    message.gte = longToNumber(reader.int64());
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.in.push(longToNumber(reader.int64()));
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.notIn.push(longToNumber(reader.int64()));
                    }
                    break;
                case 8:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInt64Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseUInt32Rules() {
    return {
        const: 0,
        lt: 0,
        lte: 0,
        gt: 0,
        gte: 0,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.UInt32Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(8).uint32(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(16).uint32(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(24).uint32(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(32).uint32(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(40).uint32(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.uint32(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUInt32Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = reader.uint32();
                    break;
                case 2:
                    message.lt = reader.uint32();
                    break;
                case 3:
                    message.lte = reader.uint32();
                    break;
                case 4:
                    message.gt = reader.uint32();
                    break;
                case 5:
                    message.gte = reader.uint32();
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.uint32());
                        }
                    }
                    else {
                        message.in.push(reader.uint32());
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.uint32());
                        }
                    }
                    else {
                        message.notIn.push(reader.uint32());
                    }
                    break;
                case 8:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUInt32Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseUInt64Rules() {
    return {
        const: 0,
        lt: 0,
        lte: 0,
        gt: 0,
        gte: 0,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.UInt64Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(8).uint64(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(16).uint64(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(24).uint64(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(32).uint64(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(40).uint64(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUInt64Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.lt = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.lte = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.gt = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.gte = longToNumber(reader.uint64());
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.in.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.notIn.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 8:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUInt64Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseSInt32Rules() {
    return {
        const: 0,
        lt: 0,
        lte: 0,
        gt: 0,
        gte: 0,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.SInt32Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(8).sint32(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(16).sint32(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(24).sint32(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(32).sint32(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(40).sint32(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.sint32(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.sint32(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSInt32Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = reader.sint32();
                    break;
                case 2:
                    message.lt = reader.sint32();
                    break;
                case 3:
                    message.lte = reader.sint32();
                    break;
                case 4:
                    message.gt = reader.sint32();
                    break;
                case 5:
                    message.gte = reader.sint32();
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.sint32());
                        }
                    }
                    else {
                        message.in.push(reader.sint32());
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.sint32());
                        }
                    }
                    else {
                        message.notIn.push(reader.sint32());
                    }
                    break;
                case 8:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSInt32Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseSInt64Rules() {
    return {
        const: 0,
        lt: 0,
        lte: 0,
        gt: 0,
        gte: 0,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.SInt64Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(8).sint64(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(16).sint64(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(24).sint64(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(32).sint64(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(40).sint64(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.sint64(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.sint64(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSInt64Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = longToNumber(reader.sint64());
                    break;
                case 2:
                    message.lt = longToNumber(reader.sint64());
                    break;
                case 3:
                    message.lte = longToNumber(reader.sint64());
                    break;
                case 4:
                    message.gt = longToNumber(reader.sint64());
                    break;
                case 5:
                    message.gte = longToNumber(reader.sint64());
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(longToNumber(reader.sint64()));
                        }
                    }
                    else {
                        message.in.push(longToNumber(reader.sint64()));
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(longToNumber(reader.sint64()));
                        }
                    }
                    else {
                        message.notIn.push(longToNumber(reader.sint64()));
                    }
                    break;
                case 8:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSInt64Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseFixed32Rules() {
    return {
        const: 0,
        lt: 0,
        lte: 0,
        gt: 0,
        gte: 0,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.Fixed32Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(13).fixed32(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(21).fixed32(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(29).fixed32(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(37).fixed32(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(45).fixed32(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.fixed32(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.fixed32(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFixed32Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = reader.fixed32();
                    break;
                case 2:
                    message.lt = reader.fixed32();
                    break;
                case 3:
                    message.lte = reader.fixed32();
                    break;
                case 4:
                    message.gt = reader.fixed32();
                    break;
                case 5:
                    message.gte = reader.fixed32();
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.fixed32());
                        }
                    }
                    else {
                        message.in.push(reader.fixed32());
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.fixed32());
                        }
                    }
                    else {
                        message.notIn.push(reader.fixed32());
                    }
                    break;
                case 8:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFixed32Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseFixed64Rules() {
    return {
        const: 0,
        lt: 0,
        lte: 0,
        gt: 0,
        gte: 0,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.Fixed64Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(9).fixed64(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(17).fixed64(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(25).fixed64(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(33).fixed64(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(41).fixed64(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.fixed64(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.fixed64(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFixed64Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = longToNumber(reader.fixed64());
                    break;
                case 2:
                    message.lt = longToNumber(reader.fixed64());
                    break;
                case 3:
                    message.lte = longToNumber(reader.fixed64());
                    break;
                case 4:
                    message.gt = longToNumber(reader.fixed64());
                    break;
                case 5:
                    message.gte = longToNumber(reader.fixed64());
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(longToNumber(reader.fixed64()));
                        }
                    }
                    else {
                        message.in.push(longToNumber(reader.fixed64()));
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(longToNumber(reader.fixed64()));
                        }
                    }
                    else {
                        message.notIn.push(longToNumber(reader.fixed64()));
                    }
                    break;
                case 8:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFixed64Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseSFixed32Rules() {
    return {
        const: 0,
        lt: 0,
        lte: 0,
        gt: 0,
        gte: 0,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.SFixed32Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(13).sfixed32(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(21).sfixed32(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(29).sfixed32(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(37).sfixed32(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(45).sfixed32(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.sfixed32(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.sfixed32(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSFixed32Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = reader.sfixed32();
                    break;
                case 2:
                    message.lt = reader.sfixed32();
                    break;
                case 3:
                    message.lte = reader.sfixed32();
                    break;
                case 4:
                    message.gt = reader.sfixed32();
                    break;
                case 5:
                    message.gte = reader.sfixed32();
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.sfixed32());
                        }
                    }
                    else {
                        message.in.push(reader.sfixed32());
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.sfixed32());
                        }
                    }
                    else {
                        message.notIn.push(reader.sfixed32());
                    }
                    break;
                case 8:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSFixed32Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseSFixed64Rules() {
    return {
        const: 0,
        lt: 0,
        lte: 0,
        gt: 0,
        gte: 0,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.SFixed64Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(9).sfixed64(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(17).sfixed64(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(25).sfixed64(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(33).sfixed64(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(41).sfixed64(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.sfixed64(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.sfixed64(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSFixed64Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = longToNumber(reader.sfixed64());
                    break;
                case 2:
                    message.lt = longToNumber(reader.sfixed64());
                    break;
                case 3:
                    message.lte = longToNumber(reader.sfixed64());
                    break;
                case 4:
                    message.gt = longToNumber(reader.sfixed64());
                    break;
                case 5:
                    message.gte = longToNumber(reader.sfixed64());
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(longToNumber(reader.sfixed64()));
                        }
                    }
                    else {
                        message.in.push(longToNumber(reader.sfixed64()));
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(longToNumber(reader.sfixed64()));
                        }
                    }
                    else {
                        message.notIn.push(longToNumber(reader.sfixed64()));
                    }
                    break;
                case 8:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSFixed64Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseBoolRules() {
    return { const: false };
}
exports.BoolRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const === true) {
            writer.uint32(8).bool(message.const);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoolRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = reader.bool();
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
            const: isSet(object.const) ? Boolean(object.const) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = message.const);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBoolRules();
        message.const = object.const ?? false;
        return message;
    },
};
function createBaseStringRules() {
    return {
        const: "",
        len: 0,
        minLen: 0,
        maxLen: 0,
        lenBytes: 0,
        minBytes: 0,
        maxBytes: 0,
        pattern: "",
        prefix: "",
        suffix: "",
        contains: "",
        notContains: "",
        in: [],
        notIn: [],
        email: undefined,
        hostname: undefined,
        ip: undefined,
        ipv4: undefined,
        ipv6: undefined,
        uri: undefined,
        uriRef: undefined,
        address: undefined,
        uuid: undefined,
        wellKnownRegex: undefined,
        strict: false,
        ignoreEmpty: false,
    };
}
exports.StringRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== "") {
            writer.uint32(10).string(message.const);
        }
        if (message.len !== 0) {
            writer.uint32(152).uint64(message.len);
        }
        if (message.minLen !== 0) {
            writer.uint32(16).uint64(message.minLen);
        }
        if (message.maxLen !== 0) {
            writer.uint32(24).uint64(message.maxLen);
        }
        if (message.lenBytes !== 0) {
            writer.uint32(160).uint64(message.lenBytes);
        }
        if (message.minBytes !== 0) {
            writer.uint32(32).uint64(message.minBytes);
        }
        if (message.maxBytes !== 0) {
            writer.uint32(40).uint64(message.maxBytes);
        }
        if (message.pattern !== "") {
            writer.uint32(50).string(message.pattern);
        }
        if (message.prefix !== "") {
            writer.uint32(58).string(message.prefix);
        }
        if (message.suffix !== "") {
            writer.uint32(66).string(message.suffix);
        }
        if (message.contains !== "") {
            writer.uint32(74).string(message.contains);
        }
        if (message.notContains !== "") {
            writer.uint32(186).string(message.notContains);
        }
        for (const v of message.in) {
            writer.uint32(82).string(v);
        }
        for (const v of message.notIn) {
            writer.uint32(90).string(v);
        }
        if (message.email !== undefined) {
            writer.uint32(96).bool(message.email);
        }
        if (message.hostname !== undefined) {
            writer.uint32(104).bool(message.hostname);
        }
        if (message.ip !== undefined) {
            writer.uint32(112).bool(message.ip);
        }
        if (message.ipv4 !== undefined) {
            writer.uint32(120).bool(message.ipv4);
        }
        if (message.ipv6 !== undefined) {
            writer.uint32(128).bool(message.ipv6);
        }
        if (message.uri !== undefined) {
            writer.uint32(136).bool(message.uri);
        }
        if (message.uriRef !== undefined) {
            writer.uint32(144).bool(message.uriRef);
        }
        if (message.address !== undefined) {
            writer.uint32(168).bool(message.address);
        }
        if (message.uuid !== undefined) {
            writer.uint32(176).bool(message.uuid);
        }
        if (message.wellKnownRegex !== undefined) {
            writer.uint32(192).int32(message.wellKnownRegex);
        }
        if (message.strict === true) {
            writer.uint32(200).bool(message.strict);
        }
        if (message.ignoreEmpty === true) {
            writer.uint32(208).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStringRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = reader.string();
                    break;
                case 19:
                    message.len = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.minLen = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.maxLen = longToNumber(reader.uint64());
                    break;
                case 20:
                    message.lenBytes = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.minBytes = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.maxBytes = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.pattern = reader.string();
                    break;
                case 7:
                    message.prefix = reader.string();
                    break;
                case 8:
                    message.suffix = reader.string();
                    break;
                case 9:
                    message.contains = reader.string();
                    break;
                case 23:
                    message.notContains = reader.string();
                    break;
                case 10:
                    message.in.push(reader.string());
                    break;
                case 11:
                    message.notIn.push(reader.string());
                    break;
                case 12:
                    message.email = reader.bool();
                    break;
                case 13:
                    message.hostname = reader.bool();
                    break;
                case 14:
                    message.ip = reader.bool();
                    break;
                case 15:
                    message.ipv4 = reader.bool();
                    break;
                case 16:
                    message.ipv6 = reader.bool();
                    break;
                case 17:
                    message.uri = reader.bool();
                    break;
                case 18:
                    message.uriRef = reader.bool();
                    break;
                case 21:
                    message.address = reader.bool();
                    break;
                case 22:
                    message.uuid = reader.bool();
                    break;
                case 24:
                    message.wellKnownRegex = reader.int32();
                    break;
                case 25:
                    message.strict = reader.bool();
                    break;
                case 26:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? String(object.const) : "",
            len: isSet(object.len) ? Number(object.len) : 0,
            minLen: isSet(object.minLen) ? Number(object.minLen) : 0,
            maxLen: isSet(object.maxLen) ? Number(object.maxLen) : 0,
            lenBytes: isSet(object.lenBytes) ? Number(object.lenBytes) : 0,
            minBytes: isSet(object.minBytes) ? Number(object.minBytes) : 0,
            maxBytes: isSet(object.maxBytes) ? Number(object.maxBytes) : 0,
            pattern: isSet(object.pattern) ? String(object.pattern) : "",
            prefix: isSet(object.prefix) ? String(object.prefix) : "",
            suffix: isSet(object.suffix) ? String(object.suffix) : "",
            contains: isSet(object.contains) ? String(object.contains) : "",
            notContains: isSet(object.notContains) ? String(object.notContains) : "",
            in: Array.isArray(object?.in) ? object.in.map((e) => String(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => String(e))
                : [],
            email: isSet(object.email) ? Boolean(object.email) : undefined,
            hostname: isSet(object.hostname) ? Boolean(object.hostname) : undefined,
            ip: isSet(object.ip) ? Boolean(object.ip) : undefined,
            ipv4: isSet(object.ipv4) ? Boolean(object.ipv4) : undefined,
            ipv6: isSet(object.ipv6) ? Boolean(object.ipv6) : undefined,
            uri: isSet(object.uri) ? Boolean(object.uri) : undefined,
            uriRef: isSet(object.uriRef) ? Boolean(object.uriRef) : undefined,
            address: isSet(object.address) ? Boolean(object.address) : undefined,
            uuid: isSet(object.uuid) ? Boolean(object.uuid) : undefined,
            wellKnownRegex: isSet(object.wellKnownRegex)
                ? knownRegexFromJSON(object.wellKnownRegex)
                : undefined,
            strict: isSet(object.strict) ? Boolean(object.strict) : false,
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = message.const);
        message.len !== undefined && (obj.len = Math.round(message.len));
        message.minLen !== undefined && (obj.minLen = Math.round(message.minLen));
        message.maxLen !== undefined && (obj.maxLen = Math.round(message.maxLen));
        message.lenBytes !== undefined &&
            (obj.lenBytes = Math.round(message.lenBytes));
        message.minBytes !== undefined &&
            (obj.minBytes = Math.round(message.minBytes));
        message.maxBytes !== undefined &&
            (obj.maxBytes = Math.round(message.maxBytes));
        message.pattern !== undefined && (obj.pattern = message.pattern);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.suffix !== undefined && (obj.suffix = message.suffix);
        message.contains !== undefined && (obj.contains = message.contains);
        message.notContains !== undefined &&
            (obj.notContains = message.notContains);
        if (message.in) {
            obj.in = message.in.map((e) => e);
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => e);
        }
        else {
            obj.notIn = [];
        }
        message.email !== undefined && (obj.email = message.email);
        message.hostname !== undefined && (obj.hostname = message.hostname);
        message.ip !== undefined && (obj.ip = message.ip);
        message.ipv4 !== undefined && (obj.ipv4 = message.ipv4);
        message.ipv6 !== undefined && (obj.ipv6 = message.ipv6);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriRef !== undefined && (obj.uriRef = message.uriRef);
        message.address !== undefined && (obj.address = message.address);
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.wellKnownRegex !== undefined &&
            (obj.wellKnownRegex =
                message.wellKnownRegex !== undefined
                    ? knownRegexToJSON(message.wellKnownRegex)
                    : undefined);
        message.strict !== undefined && (obj.strict = message.strict);
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStringRules();
        message.const = object.const ?? "";
        message.len = object.len ?? 0;
        message.minLen = object.minLen ?? 0;
        message.maxLen = object.maxLen ?? 0;
        message.lenBytes = object.lenBytes ?? 0;
        message.minBytes = object.minBytes ?? 0;
        message.maxBytes = object.maxBytes ?? 0;
        message.pattern = object.pattern ?? "";
        message.prefix = object.prefix ?? "";
        message.suffix = object.suffix ?? "";
        message.contains = object.contains ?? "";
        message.notContains = object.notContains ?? "";
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.email = object.email ?? undefined;
        message.hostname = object.hostname ?? undefined;
        message.ip = object.ip ?? undefined;
        message.ipv4 = object.ipv4 ?? undefined;
        message.ipv6 = object.ipv6 ?? undefined;
        message.uri = object.uri ?? undefined;
        message.uriRef = object.uriRef ?? undefined;
        message.address = object.address ?? undefined;
        message.uuid = object.uuid ?? undefined;
        message.wellKnownRegex = object.wellKnownRegex ?? undefined;
        message.strict = object.strict ?? false;
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseBytesRules() {
    return {
        const: new Uint8Array(),
        len: 0,
        minLen: 0,
        maxLen: 0,
        pattern: "",
        prefix: new Uint8Array(),
        suffix: new Uint8Array(),
        contains: new Uint8Array(),
        in: [],
        notIn: [],
        ip: undefined,
        ipv4: undefined,
        ipv6: undefined,
        ignoreEmpty: false,
    };
}
exports.BytesRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const.length !== 0) {
            writer.uint32(10).bytes(message.const);
        }
        if (message.len !== 0) {
            writer.uint32(104).uint64(message.len);
        }
        if (message.minLen !== 0) {
            writer.uint32(16).uint64(message.minLen);
        }
        if (message.maxLen !== 0) {
            writer.uint32(24).uint64(message.maxLen);
        }
        if (message.pattern !== "") {
            writer.uint32(34).string(message.pattern);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(42).bytes(message.prefix);
        }
        if (message.suffix.length !== 0) {
            writer.uint32(50).bytes(message.suffix);
        }
        if (message.contains.length !== 0) {
            writer.uint32(58).bytes(message.contains);
        }
        for (const v of message.in) {
            writer.uint32(66).bytes(v);
        }
        for (const v of message.notIn) {
            writer.uint32(74).bytes(v);
        }
        if (message.ip !== undefined) {
            writer.uint32(80).bool(message.ip);
        }
        if (message.ipv4 !== undefined) {
            writer.uint32(88).bool(message.ipv4);
        }
        if (message.ipv6 !== undefined) {
            writer.uint32(96).bool(message.ipv6);
        }
        if (message.ignoreEmpty === true) {
            writer.uint32(112).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBytesRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = reader.bytes();
                    break;
                case 13:
                    message.len = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.minLen = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.maxLen = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.pattern = reader.string();
                    break;
                case 5:
                    message.prefix = reader.bytes();
                    break;
                case 6:
                    message.suffix = reader.bytes();
                    break;
                case 7:
                    message.contains = reader.bytes();
                    break;
                case 8:
                    message.in.push(reader.bytes());
                    break;
                case 9:
                    message.notIn.push(reader.bytes());
                    break;
                case 10:
                    message.ip = reader.bool();
                    break;
                case 11:
                    message.ipv4 = reader.bool();
                    break;
                case 12:
                    message.ipv6 = reader.bool();
                    break;
                case 14:
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const)
                ? bytesFromBase64(object.const)
                : new Uint8Array(),
            len: isSet(object.len) ? Number(object.len) : 0,
            minLen: isSet(object.minLen) ? Number(object.minLen) : 0,
            maxLen: isSet(object.maxLen) ? Number(object.maxLen) : 0,
            pattern: isSet(object.pattern) ? String(object.pattern) : "",
            prefix: isSet(object.prefix)
                ? bytesFromBase64(object.prefix)
                : new Uint8Array(),
            suffix: isSet(object.suffix)
                ? bytesFromBase64(object.suffix)
                : new Uint8Array(),
            contains: isSet(object.contains)
                ? bytesFromBase64(object.contains)
                : new Uint8Array(),
            in: Array.isArray(object?.in)
                ? object.in.map((e) => bytesFromBase64(e))
                : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => bytesFromBase64(e))
                : [],
            ip: isSet(object.ip) ? Boolean(object.ip) : undefined,
            ipv4: isSet(object.ipv4) ? Boolean(object.ipv4) : undefined,
            ipv6: isSet(object.ipv6) ? Boolean(object.ipv6) : undefined,
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined &&
            (obj.const = base64FromBytes(message.const !== undefined ? message.const : new Uint8Array()));
        message.len !== undefined && (obj.len = Math.round(message.len));
        message.minLen !== undefined && (obj.minLen = Math.round(message.minLen));
        message.maxLen !== undefined && (obj.maxLen = Math.round(message.maxLen));
        message.pattern !== undefined && (obj.pattern = message.pattern);
        message.prefix !== undefined &&
            (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
        message.suffix !== undefined &&
            (obj.suffix = base64FromBytes(message.suffix !== undefined ? message.suffix : new Uint8Array()));
        message.contains !== undefined &&
            (obj.contains = base64FromBytes(message.contains !== undefined ? message.contains : new Uint8Array()));
        if (message.in) {
            obj.in = message.in.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.notIn = [];
        }
        message.ip !== undefined && (obj.ip = message.ip);
        message.ipv4 !== undefined && (obj.ipv4 = message.ipv4);
        message.ipv6 !== undefined && (obj.ipv6 = message.ipv6);
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBytesRules();
        message.const = object.const ?? new Uint8Array();
        message.len = object.len ?? 0;
        message.minLen = object.minLen ?? 0;
        message.maxLen = object.maxLen ?? 0;
        message.pattern = object.pattern ?? "";
        message.prefix = object.prefix ?? new Uint8Array();
        message.suffix = object.suffix ?? new Uint8Array();
        message.contains = object.contains ?? new Uint8Array();
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ip = object.ip ?? undefined;
        message.ipv4 = object.ipv4 ?? undefined;
        message.ipv6 = object.ipv6 ?? undefined;
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseEnumRules() {
    return { const: 0, definedOnly: false, in: [], notIn: [] };
}
exports.EnumRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(8).int32(message.const);
        }
        if (message.definedOnly === true) {
            writer.uint32(16).bool(message.definedOnly);
        }
        writer.uint32(26).fork();
        for (const v of message.in) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(34).fork();
        for (const v of message.notIn) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.const = reader.int32();
                    break;
                case 2:
                    message.definedOnly = reader.bool();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.int32());
                        }
                    }
                    else {
                        message.in.push(reader.int32());
                    }
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.int32());
                        }
                    }
                    else {
                        message.notIn.push(reader.int32());
                    }
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
            const: isSet(object.const) ? Number(object.const) : 0,
            definedOnly: isSet(object.definedOnly)
                ? Boolean(object.definedOnly)
                : false,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => Number(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.definedOnly !== undefined &&
            (obj.definedOnly = message.definedOnly);
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEnumRules();
        message.const = object.const ?? 0;
        message.definedOnly = object.definedOnly ?? false;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        return message;
    },
};
function createBaseMessageRules() {
    return { skip: false, required: false };
}
exports.MessageRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.skip === true) {
            writer.uint32(8).bool(message.skip);
        }
        if (message.required === true) {
            writer.uint32(16).bool(message.required);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.skip = reader.bool();
                    break;
                case 2:
                    message.required = reader.bool();
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
            skip: isSet(object.skip) ? Boolean(object.skip) : false,
            required: isSet(object.required) ? Boolean(object.required) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.skip !== undefined && (obj.skip = message.skip);
        message.required !== undefined && (obj.required = message.required);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMessageRules();
        message.skip = object.skip ?? false;
        message.required = object.required ?? false;
        return message;
    },
};
function createBaseRepeatedRules() {
    return {
        minItems: 0,
        maxItems: 0,
        unique: false,
        items: undefined,
        ignoreEmpty: false,
    };
}
exports.RepeatedRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.minItems !== 0) {
            writer.uint32(8).uint64(message.minItems);
        }
        if (message.maxItems !== 0) {
            writer.uint32(16).uint64(message.maxItems);
        }
        if (message.unique === true) {
            writer.uint32(24).bool(message.unique);
        }
        if (message.items !== undefined) {
            exports.FieldRules.encode(message.items, writer.uint32(34).fork()).ldelim();
        }
        if (message.ignoreEmpty === true) {
            writer.uint32(40).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRepeatedRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minItems = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.maxItems = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.unique = reader.bool();
                    break;
                case 4:
                    message.items = exports.FieldRules.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.ignoreEmpty = reader.bool();
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
            minItems: isSet(object.minItems) ? Number(object.minItems) : 0,
            maxItems: isSet(object.maxItems) ? Number(object.maxItems) : 0,
            unique: isSet(object.unique) ? Boolean(object.unique) : false,
            items: isSet(object.items)
                ? exports.FieldRules.fromJSON(object.items)
                : undefined,
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.minItems !== undefined &&
            (obj.minItems = Math.round(message.minItems));
        message.maxItems !== undefined &&
            (obj.maxItems = Math.round(message.maxItems));
        message.unique !== undefined && (obj.unique = message.unique);
        message.items !== undefined &&
            (obj.items = message.items
                ? exports.FieldRules.toJSON(message.items)
                : undefined);
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRepeatedRules();
        message.minItems = object.minItems ?? 0;
        message.maxItems = object.maxItems ?? 0;
        message.unique = object.unique ?? false;
        message.items =
            object.items !== undefined && object.items !== null
                ? exports.FieldRules.fromPartial(object.items)
                : undefined;
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseMapRules() {
    return {
        minPairs: 0,
        maxPairs: 0,
        noSparse: false,
        keys: undefined,
        values: undefined,
        ignoreEmpty: false,
    };
}
exports.MapRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.minPairs !== 0) {
            writer.uint32(8).uint64(message.minPairs);
        }
        if (message.maxPairs !== 0) {
            writer.uint32(16).uint64(message.maxPairs);
        }
        if (message.noSparse === true) {
            writer.uint32(24).bool(message.noSparse);
        }
        if (message.keys !== undefined) {
            exports.FieldRules.encode(message.keys, writer.uint32(34).fork()).ldelim();
        }
        if (message.values !== undefined) {
            exports.FieldRules.encode(message.values, writer.uint32(42).fork()).ldelim();
        }
        if (message.ignoreEmpty === true) {
            writer.uint32(48).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMapRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minPairs = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.maxPairs = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.noSparse = reader.bool();
                    break;
                case 4:
                    message.keys = exports.FieldRules.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.values = exports.FieldRules.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.ignoreEmpty = reader.bool();
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
            minPairs: isSet(object.minPairs) ? Number(object.minPairs) : 0,
            maxPairs: isSet(object.maxPairs) ? Number(object.maxPairs) : 0,
            noSparse: isSet(object.noSparse) ? Boolean(object.noSparse) : false,
            keys: isSet(object.keys) ? exports.FieldRules.fromJSON(object.keys) : undefined,
            values: isSet(object.values)
                ? exports.FieldRules.fromJSON(object.values)
                : undefined,
            ignoreEmpty: isSet(object.ignoreEmpty)
                ? Boolean(object.ignoreEmpty)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.minPairs !== undefined &&
            (obj.minPairs = Math.round(message.minPairs));
        message.maxPairs !== undefined &&
            (obj.maxPairs = Math.round(message.maxPairs));
        message.noSparse !== undefined && (obj.noSparse = message.noSparse);
        message.keys !== undefined &&
            (obj.keys = message.keys ? exports.FieldRules.toJSON(message.keys) : undefined);
        message.values !== undefined &&
            (obj.values = message.values
                ? exports.FieldRules.toJSON(message.values)
                : undefined);
        message.ignoreEmpty !== undefined &&
            (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMapRules();
        message.minPairs = object.minPairs ?? 0;
        message.maxPairs = object.maxPairs ?? 0;
        message.noSparse = object.noSparse ?? false;
        message.keys =
            object.keys !== undefined && object.keys !== null
                ? exports.FieldRules.fromPartial(object.keys)
                : undefined;
        message.values =
            object.values !== undefined && object.values !== null
                ? exports.FieldRules.fromPartial(object.values)
                : undefined;
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseAnyRules() {
    return { required: false, in: [], notIn: [] };
}
exports.AnyRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.required === true) {
            writer.uint32(8).bool(message.required);
        }
        for (const v of message.in) {
            writer.uint32(18).string(v);
        }
        for (const v of message.notIn) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAnyRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.required = reader.bool();
                    break;
                case 2:
                    message.in.push(reader.string());
                    break;
                case 3:
                    message.notIn.push(reader.string());
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
            required: isSet(object.required) ? Boolean(object.required) : false,
            in: Array.isArray(object?.in) ? object.in.map((e) => String(e)) : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.required !== undefined && (obj.required = message.required);
        if (message.in) {
            obj.in = message.in.map((e) => e);
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => e);
        }
        else {
            obj.notIn = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAnyRules();
        message.required = object.required ?? false;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        return message;
    },
};
function createBaseDurationRules() {
    return {
        required: false,
        const: undefined,
        lt: undefined,
        lte: undefined,
        gt: undefined,
        gte: undefined,
        in: [],
        notIn: [],
    };
}
exports.DurationRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.required === true) {
            writer.uint32(8).bool(message.required);
        }
        if (message.const !== undefined) {
            duration_1.Duration.encode(message.const, writer.uint32(18).fork()).ldelim();
        }
        if (message.lt !== undefined) {
            duration_1.Duration.encode(message.lt, writer.uint32(26).fork()).ldelim();
        }
        if (message.lte !== undefined) {
            duration_1.Duration.encode(message.lte, writer.uint32(34).fork()).ldelim();
        }
        if (message.gt !== undefined) {
            duration_1.Duration.encode(message.gt, writer.uint32(42).fork()).ldelim();
        }
        if (message.gte !== undefined) {
            duration_1.Duration.encode(message.gte, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.in) {
            duration_1.Duration.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.notIn) {
            duration_1.Duration.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDurationRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.required = reader.bool();
                    break;
                case 2:
                    message.const = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.lt = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.lte = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.gt = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.gte = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.in.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.notIn.push(duration_1.Duration.decode(reader, reader.uint32()));
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
            required: isSet(object.required) ? Boolean(object.required) : false,
            const: isSet(object.const) ? duration_1.Duration.fromJSON(object.const) : undefined,
            lt: isSet(object.lt) ? duration_1.Duration.fromJSON(object.lt) : undefined,
            lte: isSet(object.lte) ? duration_1.Duration.fromJSON(object.lte) : undefined,
            gt: isSet(object.gt) ? duration_1.Duration.fromJSON(object.gt) : undefined,
            gte: isSet(object.gte) ? duration_1.Duration.fromJSON(object.gte) : undefined,
            in: Array.isArray(object?.in)
                ? object.in.map((e) => duration_1.Duration.fromJSON(e))
                : [],
            notIn: Array.isArray(object?.notIn)
                ? object.notIn.map((e) => duration_1.Duration.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.required !== undefined && (obj.required = message.required);
        message.const !== undefined &&
            (obj.const = message.const ? duration_1.Duration.toJSON(message.const) : undefined);
        message.lt !== undefined &&
            (obj.lt = message.lt ? duration_1.Duration.toJSON(message.lt) : undefined);
        message.lte !== undefined &&
            (obj.lte = message.lte ? duration_1.Duration.toJSON(message.lte) : undefined);
        message.gt !== undefined &&
            (obj.gt = message.gt ? duration_1.Duration.toJSON(message.gt) : undefined);
        message.gte !== undefined &&
            (obj.gte = message.gte ? duration_1.Duration.toJSON(message.gte) : undefined);
        if (message.in) {
            obj.in = message.in.map((e) => (e ? duration_1.Duration.toJSON(e) : undefined));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => e ? duration_1.Duration.toJSON(e) : undefined);
        }
        else {
            obj.notIn = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDurationRules();
        message.required = object.required ?? false;
        message.const =
            object.const !== undefined && object.const !== null
                ? duration_1.Duration.fromPartial(object.const)
                : undefined;
        message.lt =
            object.lt !== undefined && object.lt !== null
                ? duration_1.Duration.fromPartial(object.lt)
                : undefined;
        message.lte =
            object.lte !== undefined && object.lte !== null
                ? duration_1.Duration.fromPartial(object.lte)
                : undefined;
        message.gt =
            object.gt !== undefined && object.gt !== null
                ? duration_1.Duration.fromPartial(object.gt)
                : undefined;
        message.gte =
            object.gte !== undefined && object.gte !== null
                ? duration_1.Duration.fromPartial(object.gte)
                : undefined;
        message.in = object.in?.map((e) => duration_1.Duration.fromPartial(e)) || [];
        message.notIn = object.notIn?.map((e) => duration_1.Duration.fromPartial(e)) || [];
        return message;
    },
};
function createBaseTimestampRules() {
    return {
        required: false,
        const: undefined,
        lt: undefined,
        lte: undefined,
        gt: undefined,
        gte: undefined,
        ltNow: false,
        gtNow: false,
        within: undefined,
    };
}
exports.TimestampRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.required === true) {
            writer.uint32(8).bool(message.required);
        }
        if (message.const !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.const), writer.uint32(18).fork()).ldelim();
        }
        if (message.lt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lt), writer.uint32(26).fork()).ldelim();
        }
        if (message.lte !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lte), writer.uint32(34).fork()).ldelim();
        }
        if (message.gt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.gt), writer.uint32(42).fork()).ldelim();
        }
        if (message.gte !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.gte), writer.uint32(50).fork()).ldelim();
        }
        if (message.ltNow === true) {
            writer.uint32(56).bool(message.ltNow);
        }
        if (message.gtNow === true) {
            writer.uint32(64).bool(message.gtNow);
        }
        if (message.within !== undefined) {
            duration_1.Duration.encode(message.within, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestampRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.required = reader.bool();
                    break;
                case 2:
                    message.const = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lte = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.gt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.gte = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.ltNow = reader.bool();
                    break;
                case 8:
                    message.gtNow = reader.bool();
                    break;
                case 9:
                    message.within = duration_1.Duration.decode(reader, reader.uint32());
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
            required: isSet(object.required) ? Boolean(object.required) : false,
            const: isSet(object.const) ? fromJsonTimestamp(object.const) : undefined,
            lt: isSet(object.lt) ? fromJsonTimestamp(object.lt) : undefined,
            lte: isSet(object.lte) ? fromJsonTimestamp(object.lte) : undefined,
            gt: isSet(object.gt) ? fromJsonTimestamp(object.gt) : undefined,
            gte: isSet(object.gte) ? fromJsonTimestamp(object.gte) : undefined,
            ltNow: isSet(object.ltNow) ? Boolean(object.ltNow) : false,
            gtNow: isSet(object.gtNow) ? Boolean(object.gtNow) : false,
            within: isSet(object.within)
                ? duration_1.Duration.fromJSON(object.within)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.required !== undefined && (obj.required = message.required);
        message.const !== undefined && (obj.const = message.const.toISOString());
        message.lt !== undefined && (obj.lt = message.lt.toISOString());
        message.lte !== undefined && (obj.lte = message.lte.toISOString());
        message.gt !== undefined && (obj.gt = message.gt.toISOString());
        message.gte !== undefined && (obj.gte = message.gte.toISOString());
        message.ltNow !== undefined && (obj.ltNow = message.ltNow);
        message.gtNow !== undefined && (obj.gtNow = message.gtNow);
        message.within !== undefined &&
            (obj.within = message.within
                ? duration_1.Duration.toJSON(message.within)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTimestampRules();
        message.required = object.required ?? false;
        message.const = object.const ?? undefined;
        message.lt = object.lt ?? undefined;
        message.lte = object.lte ?? undefined;
        message.gt = object.gt ?? undefined;
        message.gte = object.gte ?? undefined;
        message.ltNow = object.ltNow ?? false;
        message.gtNow = object.gtNow ?? false;
        message.within =
            object.within !== undefined && object.within !== null
                ? duration_1.Duration.fromPartial(object.within)
                : undefined;
        return message;
    },
};
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
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
