protoc \
  --proto_path=./ \
  -I ../../ \
  --plugin=../../node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_opt=esModuleInterop=true \
  --ts_proto_out="./ts" \
  updated_member.proto
