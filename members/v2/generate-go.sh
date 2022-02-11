protoc \
  --proto_path=../../ \
  --go_out="./go" \
  --go_opt=module="github.com/UptownRunners/common/members/v2/go" \
  --go-grpc_opt=module="github.com/UptownRunners/common/members/v2/go" \
  --go-grpc_out="./go" \
  members/v2/members.proto