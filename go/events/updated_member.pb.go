// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: v1/updated_member.proto

package events

import (
	members "github.com/UptownRunners/common/go/members"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Member struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	MemberId               int64                    `protobuf:"varint,1,opt,name=member_id,json=memberId,proto3" json:"member_id,omitempty"`
	UserId                 string                   `protobuf:"bytes,2,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	FirstName              string                   `protobuf:"bytes,3,opt,name=first_name,json=firstName,proto3" json:"first_name,omitempty"`
	LastName               string                   `protobuf:"bytes,4,opt,name=last_name,json=lastName,proto3" json:"last_name,omitempty"`
	Address                string                   `protobuf:"bytes,5,opt,name=address,proto3" json:"address,omitempty"`
	PhoneNumber            string                   `protobuf:"bytes,6,opt,name=phone_number,json=phoneNumber,proto3" json:"phone_number,omitempty"`
	NationalIdentifier     string                   `protobuf:"bytes,7,opt,name=national_identifier,json=nationalIdentifier,proto3" json:"national_identifier,omitempty"`
	Email                  string                   `protobuf:"bytes,8,opt,name=email,proto3" json:"email,omitempty"`
	RenewedDate            *timestamppb.Timestamp   `protobuf:"bytes,9,opt,name=renewed_date,json=renewedDate,proto3" json:"renewed_date,omitempty"`
	OverrideExpirationDate *timestamppb.Timestamp   `protobuf:"bytes,10,opt,name=override_expiration_date,json=overrideExpirationDate,proto3" json:"override_expiration_date,omitempty"`
	MembershipType         members.MemberShipType   `protobuf:"varint,11,opt,name=membership_type,json=membershipType,proto3,enum=uptown_runners.members.v1.MemberShipType" json:"membership_type,omitempty"`
	Status                 members.MembershipStatus `protobuf:"varint,12,opt,name=status,proto3,enum=uptown_runners.members.v1.MembershipStatus" json:"status,omitempty"`
}

func (x *Member) Reset() {
	*x = Member{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_updated_member_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Member) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Member) ProtoMessage() {}

func (x *Member) ProtoReflect() protoreflect.Message {
	mi := &file_v1_updated_member_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Member.ProtoReflect.Descriptor instead.
func (*Member) Descriptor() ([]byte, []int) {
	return file_v1_updated_member_proto_rawDescGZIP(), []int{0}
}

func (x *Member) GetMemberId() int64 {
	if x != nil {
		return x.MemberId
	}
	return 0
}

func (x *Member) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *Member) GetFirstName() string {
	if x != nil {
		return x.FirstName
	}
	return ""
}

func (x *Member) GetLastName() string {
	if x != nil {
		return x.LastName
	}
	return ""
}

func (x *Member) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *Member) GetPhoneNumber() string {
	if x != nil {
		return x.PhoneNumber
	}
	return ""
}

func (x *Member) GetNationalIdentifier() string {
	if x != nil {
		return x.NationalIdentifier
	}
	return ""
}

func (x *Member) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *Member) GetRenewedDate() *timestamppb.Timestamp {
	if x != nil {
		return x.RenewedDate
	}
	return nil
}

func (x *Member) GetOverrideExpirationDate() *timestamppb.Timestamp {
	if x != nil {
		return x.OverrideExpirationDate
	}
	return nil
}

func (x *Member) GetMembershipType() members.MemberShipType {
	if x != nil {
		return x.MembershipType
	}
	return members.MemberShipType(0)
}

func (x *Member) GetStatus() members.MembershipStatus {
	if x != nil {
		return x.Status
	}
	return members.MembershipStatus(0)
}

type UpdateMemberEvent struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Before *Member `protobuf:"bytes,1,opt,name=before,proto3" json:"before,omitempty"`
	After  *Member `protobuf:"bytes,2,opt,name=after,proto3" json:"after,omitempty"`
}

func (x *UpdateMemberEvent) Reset() {
	*x = UpdateMemberEvent{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_updated_member_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateMemberEvent) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateMemberEvent) ProtoMessage() {}

func (x *UpdateMemberEvent) ProtoReflect() protoreflect.Message {
	mi := &file_v1_updated_member_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateMemberEvent.ProtoReflect.Descriptor instead.
func (*UpdateMemberEvent) Descriptor() ([]byte, []int) {
	return file_v1_updated_member_proto_rawDescGZIP(), []int{1}
}

func (x *UpdateMemberEvent) GetBefore() *Member {
	if x != nil {
		return x.Before
	}
	return nil
}

func (x *UpdateMemberEvent) GetAfter() *Member {
	if x != nil {
		return x.After
	}
	return nil
}

var File_v1_updated_member_proto protoreflect.FileDescriptor

var file_v1_updated_member_proto_rawDesc = []byte{
	0x0a, 0x17, 0x76, 0x31, 0x2f, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x6d, 0x65, 0x6d,
	0x62, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x18, 0x75, 0x70, 0x74, 0x6f, 0x77,
	0x6e, 0x5f, 0x72, 0x75, 0x6e, 0x6e, 0x65, 0x72, 0x73, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73,
	0x2e, 0x76, 0x31, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x10, 0x76, 0x31, 0x2f, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xac, 0x04, 0x0a, 0x06, 0x4d, 0x65, 0x6d, 0x62, 0x65,
	0x72, 0x12, 0x1b, 0x0a, 0x09, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x49, 0x64, 0x12, 0x17,
	0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x66, 0x69, 0x72, 0x73, 0x74,
	0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x66, 0x69, 0x72,
	0x73, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6c, 0x61, 0x73, 0x74, 0x4e,
	0x61, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x21, 0x0a,
	0x0c, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0b, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72,
	0x12, 0x2f, 0x0a, 0x13, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x61, 0x6c, 0x5f, 0x69, 0x64, 0x65,
	0x6e, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x12, 0x6e,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x61, 0x6c, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69, 0x65,
	0x72, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x3d, 0x0a, 0x0c, 0x72, 0x65, 0x6e, 0x65, 0x77,
	0x65, 0x64, 0x5f, 0x64, 0x61, 0x74, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0b, 0x72, 0x65, 0x6e, 0x65, 0x77,
	0x65, 0x64, 0x44, 0x61, 0x74, 0x65, 0x12, 0x54, 0x0a, 0x18, 0x6f, 0x76, 0x65, 0x72, 0x72, 0x69,
	0x64, 0x65, 0x5f, 0x65, 0x78, 0x70, 0x69, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x61,
	0x74, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x52, 0x16, 0x6f, 0x76, 0x65, 0x72, 0x72, 0x69, 0x64, 0x65, 0x45, 0x78,
	0x70, 0x69, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x65, 0x12, 0x52, 0x0a, 0x0f,
	0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x0b, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x29, 0x2e, 0x75, 0x70, 0x74, 0x6f, 0x77, 0x6e, 0x5f, 0x72,
	0x75, 0x6e, 0x6e, 0x65, 0x72, 0x73, 0x2e, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x2e, 0x76,
	0x31, 0x2e, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x53, 0x68, 0x69, 0x70, 0x54, 0x79, 0x70, 0x65,
	0x52, 0x0e, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x54, 0x79, 0x70, 0x65,
	0x12, 0x43, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x2b, 0x2e, 0x75, 0x70, 0x74, 0x6f, 0x77, 0x6e, 0x5f, 0x72, 0x75, 0x6e, 0x6e, 0x65, 0x72,
	0x73, 0x2e, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65, 0x6d,
	0x62, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x85, 0x01, 0x0a, 0x11, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x38, 0x0a, 0x06, 0x62,
	0x65, 0x66, 0x6f, 0x72, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x75, 0x70,
	0x74, 0x6f, 0x77, 0x6e, 0x5f, 0x72, 0x75, 0x6e, 0x6e, 0x65, 0x72, 0x73, 0x2e, 0x65, 0x76, 0x65,
	0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x52, 0x06, 0x62,
	0x65, 0x66, 0x6f, 0x72, 0x65, 0x12, 0x36, 0x0a, 0x05, 0x61, 0x66, 0x74, 0x65, 0x72, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x75, 0x70, 0x74, 0x6f, 0x77, 0x6e, 0x5f, 0x72, 0x75,
	0x6e, 0x6e, 0x65, 0x72, 0x73, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x2e,
	0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x52, 0x05, 0x61, 0x66, 0x74, 0x65, 0x72, 0x42, 0x2b, 0x5a,
	0x29, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x55, 0x70, 0x74, 0x6f,
	0x77, 0x6e, 0x52, 0x75, 0x6e, 0x6e, 0x65, 0x72, 0x73, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2f, 0x67, 0x6f, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_v1_updated_member_proto_rawDescOnce sync.Once
	file_v1_updated_member_proto_rawDescData = file_v1_updated_member_proto_rawDesc
)

func file_v1_updated_member_proto_rawDescGZIP() []byte {
	file_v1_updated_member_proto_rawDescOnce.Do(func() {
		file_v1_updated_member_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_updated_member_proto_rawDescData)
	})
	return file_v1_updated_member_proto_rawDescData
}

var file_v1_updated_member_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_v1_updated_member_proto_goTypes = []interface{}{
	(*Member)(nil),                // 0: uptown_runners.events.v1.Member
	(*UpdateMemberEvent)(nil),     // 1: uptown_runners.events.v1.UpdateMemberEvent
	(*timestamppb.Timestamp)(nil), // 2: google.protobuf.Timestamp
	(members.MemberShipType)(0),   // 3: uptown_runners.members.v1.MemberShipType
	(members.MembershipStatus)(0), // 4: uptown_runners.members.v1.MembershipStatus
}
var file_v1_updated_member_proto_depIdxs = []int32{
	2, // 0: uptown_runners.events.v1.Member.renewed_date:type_name -> google.protobuf.Timestamp
	2, // 1: uptown_runners.events.v1.Member.override_expiration_date:type_name -> google.protobuf.Timestamp
	3, // 2: uptown_runners.events.v1.Member.membership_type:type_name -> uptown_runners.members.v1.MemberShipType
	4, // 3: uptown_runners.events.v1.Member.status:type_name -> uptown_runners.members.v1.MembershipStatus
	0, // 4: uptown_runners.events.v1.UpdateMemberEvent.before:type_name -> uptown_runners.events.v1.Member
	0, // 5: uptown_runners.events.v1.UpdateMemberEvent.after:type_name -> uptown_runners.events.v1.Member
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_v1_updated_member_proto_init() }
func file_v1_updated_member_proto_init() {
	if File_v1_updated_member_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_v1_updated_member_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Member); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_updated_member_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateMemberEvent); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_updated_member_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_v1_updated_member_proto_goTypes,
		DependencyIndexes: file_v1_updated_member_proto_depIdxs,
		MessageInfos:      file_v1_updated_member_proto_msgTypes,
	}.Build()
	File_v1_updated_member_proto = out.File
	file_v1_updated_member_proto_rawDesc = nil
	file_v1_updated_member_proto_goTypes = nil
	file_v1_updated_member_proto_depIdxs = nil
}
