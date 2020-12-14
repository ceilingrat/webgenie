#!/bin/bash -x

echo -e "Commit to GitHub\n\nSupply a Comment:"
read -e comment

git add .
git commit --author 'ceilingrat <>' -m "$comment"
# git push -u origin main

echo -e "ATTENTION\nCommit created, but NOT YET pushed to GitHub.\n\nGo to 'Version Control' panel to push commit."