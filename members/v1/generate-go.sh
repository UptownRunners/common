protoc \
  --proto_path=../../ \
  -I ${GOPATH}/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v0.6.2 \
  --go_out="./go" \
  --go_opt=module="github.com/UptownRunners/common/members/v1/go" \
  --validate_opt=module="github.com/UptownRunners/common/members/v1/go" \
  --validate_out="lang=go:./go" \
  --go-grpc_opt=module="github.com/UptownRunners/common/members/v1/go" \
  --go-grpc_out="./go" \
  members/v1/members.proto