#!/bin/bash

git checkout deploy
git merge main

# build the static version of the website
chmod u+r+x build.sh
./build.sh

git add .
git commit -m "Deploy: $(ruby -e 'puts Time.now')"
git push
git checkout main
