protoc \
  --proto_path=../ \
  -I ${GOPATH}/src \
  -I ${GOPATH}/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v0.6.2 \
  --go_out="." \
  --go_opt=module="github.com/UptownRunners/common/members/v1/go" \
  --validate_opt=module="github.com/UptownRunners/common/members/v1/go" \
  --validate_out="lang=go:." \
  --go-grpc_opt=module="github.com/UptownRunners/common/members/v1/go" \
  --go-grpc_out="." \
  ../members.proto