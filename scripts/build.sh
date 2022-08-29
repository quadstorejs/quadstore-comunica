
BASEDIR=$(dirname $(realpath "$0"))

echo "building packages/immutable"
cd "$BASEDIR/../packages/immutable"
npm run build

echo "building packages/uuid"
cd "$BASEDIR/../packages/uuid"
npm run build

echo "building engine"
cd "$BASEDIR/../engine"
npm run build

echo "building spec suite"
cd "$BASEDIR/../spec"
npm run build

echo "building examples"
cd "$BASEDIR/../examples"
npm run build
