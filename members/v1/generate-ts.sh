protoc \
  --proto_path=./ \
  -I ../../ \
  --plugin=../../node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out="./ts" \
  --ts_proto_opt=outputServices=grpc-js \
  --ts_proto_opt=esModuleInterop=true \
  members.proto
