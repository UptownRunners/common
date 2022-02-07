protoc \
  -I ./ \
  -I ${GOPATH}/src \
  -I ${GOPATH}/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v0.6.2 \
  --go_out="./go" \
  --validate_out="lang=go:./go" \
  --go-grpc_out="./go" \
  ./members.proto