#!/bin/bash -x
# commit to github using Repl.it

# git config --global user.name "ceilingrat"
# git config --global user.email '<>'

# cat .git/config

echo -e "Committing to GitHub\n\nSupply a Comment:"
read -e comment

git add .
git commit --author 'ceilingrat <>' -m "$comment"
git push -u origin master