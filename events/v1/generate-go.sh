protoc \
  --proto_path=../../ \
  -I ${GOPATH}/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v0.6.2 \
  --go_out="./go" \
  --validate_out="lang=go:./go" \
  --go_opt=module="github.com/UptownRunners/common/events/v1/go" \
  --validate_opt=module="github.com/UptownRunners/common/events/v1/go" \
  events/v1/updated_member.proto