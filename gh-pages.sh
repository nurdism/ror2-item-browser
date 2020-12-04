#!/usr/bin/env sh

set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/nurdism/ror2-item-browser.git master:gh-pages
cd -