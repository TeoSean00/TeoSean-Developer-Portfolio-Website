#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "New Deployment"
git push -f git@github.com:TeoSean00/TeoSean-Developer-Portfolio-Website master:gh-pages

cd -