
BASEDIR=$(dirname $(realpath "$0"))

cd "$BASEDIR/..";
rm -rf ./node_modules
rm -rf ./**/node_modules
npm ci
