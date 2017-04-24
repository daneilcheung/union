current_user=$(npm whoami)

if [[ ! $current_user = 'xo-union' ]]; then
  echo "Must be logged in to NPM as 'xo-union'."
  echo
  echo "Email union-federation.group@xogrp.com to ask for credentials."
  echo
  echo "To log in run:"
  echo "    \`npm login\`"
  exit 1
fi

yarn install \
&& yarn run build.patterns \
&& node ./scripts/select-packages-to-publish.js
