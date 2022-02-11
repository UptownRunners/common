protoc \
  --proto_path=./protos \
  --go_out="./go" \
  --go_opt=module="github.com/UptownRunners/common/go" \
  --go-grpc_opt=module="github.com/UptownRunners/common/go" \
  --go-grpc_out="./go" \
  protos/*.proto