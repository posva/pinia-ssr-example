#!/usr/bin/env bash
set -euo pipefail

cp -r dist/client serverless/public
rm -f serverless/public/index.html
mkdir serverless/api/renderer
mv serverless/public/ssr-manifest.json serverless/api/renderer/
cp dist/server/main.js serverless/api/renderer/
