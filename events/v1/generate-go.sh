protoc \
  --proto_path=../../ \
  --go_out="./go" \
  --go_opt=module="github.com/UptownRunners/common/events/v1/go" \
  events/v1/updated_member.proto