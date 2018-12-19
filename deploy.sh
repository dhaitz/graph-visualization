#!/bin/sh
npm run build
cd ./build
git add .
git commit -m 'push to gh-pages'
git push --force git@github.com:dhaitz/graph-visualization.git master:gh-pages
