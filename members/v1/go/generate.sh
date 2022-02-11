protoc \
  --proto_path=../ \
  -I ${GOPATH}/src \
  -I ${GOPATH}/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v0.6.2 \
  --go_opt=paths=source_relative \
  --go_out="." \
  --validate_opt=paths=source_relative \
  --validate_out="lang=go:." \
  --go-grpc_opt=paths=source_relative \
  --go-grpc_out="." \
  ../members.proto