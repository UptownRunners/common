protoc \
  --proto_path=./ \
  -I ${GOPATH}/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v0.6.2 \
  -I ../../ \
  --plugin=../../node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out="./ts" \
  --ts_proto_opt=outputServices=grpc-js \
  --ts_proto_opt=esModuleInterop=true \
  members.proto
