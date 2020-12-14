#!/bin/bash -x
# commit to github using Repl.it
echo -e "Committing to GitHub\n\nSupply a Comment:"
read -e comment

git add .
git commit -m '$comment'
git push -u origin master