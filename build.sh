#!/bin/bash

# move to site folder
#echo CD-ing to site folder..
#cd .git

# build and export as static html site
echo Building and Exporting..
npm run build
#npm run export

# copy out folder to docs folder
#echo Moving files to root folder..
#rm -rf ../_next
#cp -R ./out/* ../

echo Moving to root directory
cd ..

echo Done.
