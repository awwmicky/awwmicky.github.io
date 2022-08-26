#!/bin/bash

clear;
echo "Deleting all dependencies → ♲";
echo -e "[dir-path] → $PWD \n";

PACKAGES=(
  "pnpm-lock.yaml"
  "yarn.lock"
  "package-lock.json"
  "node_modules"
);

for item in ${PACKAGES[@]};
do
  if [ ! -e $item ];
  then
    continue
  fi;

  echo -e "[dir-find] → $item \n";
# view current dependencies
  find . -name $item -print;
  echo "";
# delete all dependencies
  find . -name $item -prune -print -exec rm -rf '{}' +;
  echo "";
done;

read -p "Finished! Press Enter to exit: " x;

exit 0;
