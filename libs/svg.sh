#!/bin/bash
if [[ "$1" == "" ]]; then (echo 'version missing' && exit 1); fi
rm ./apps/i2021/public/sprite-*.svg || true
npx svgo --multipass -f ./apps/i2021/public/icons -q
npx svg-sprite-generator -d ./apps/i2021/public/icons/ -o ./apps/i2021/public/sprite-$1.svg
sed -i '' "s+const currentVersion = \'v[0-9]\'+const currentVersion = '$@'+" ./apps/i2021/components/icon.tsx
