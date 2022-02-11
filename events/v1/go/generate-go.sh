protoc \
  --proto_path=../ \
  -I ../../../ \
  -I ${GOPATH}/src \
  -I ${GOPATH}/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v0.6.2 \
  --go_out="." \
  --validate_out="lang=go:." \
  --go-grpc_out="." \
  --go_opt=paths=source_relative \
  --validate_opt=paths=source_relative \
  --go-grpc_opt=paths=source_relative \
  ../updated_member.proto