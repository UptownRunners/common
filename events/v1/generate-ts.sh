protoc \
  --proto_path=../../ \
  -I ${GOPATH}/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v0.6.2 \
  --plugin=./ts/node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out="./ts" \
  --js_opt=module="github.com/UptownRunners/common/events/v1/ts" \
  events/v1/updated_member.proto
