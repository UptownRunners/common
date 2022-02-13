protoc \
  --proto_path=./protos \
  --plugin=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_opt=outputServices=grpc-js \
  --ts_proto_opt=esModuleInterop=true \
  --ts_proto_opt=snakeToCamel=false \
  --ts_proto_out="./ts" \
  protos/**/*.proto
