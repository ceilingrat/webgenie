#!/bin/bash -x

echo -e "Committing to GitHub\n\nSupply a Comment:"
read -e comment

git add .
git commit --author 'ceilingrat <>' -m "$comment"
git push -u origin main