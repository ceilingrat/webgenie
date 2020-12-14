#!/bin/bash -x

username="ceilingrat"

echo -e "Commit to GitHub\n\nSupply a Comment:"
read -e comment

git add .
git commit --author "$username <>" -m "$comment"
# git push -u origin main

echo -e "\n\n!~ATTENTION~!\nCommit created, but NOT YET pushed to GitHub.\n\nGo to 'Version Control' panel to push commit."