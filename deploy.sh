#!/bin/bash

set -e

echo "🚀 Starting Next.js Standalone Deployment Build..."
echo ""

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

DEPLOY_FOLDER="deploy"
BUILD_FOLDER=".next"

if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
    echo ""
fi

echo -e "${YELLOW}🔨 Building Next.js project in standalone mode...${NC}"
npm run build
echo ""

if [ ! -d "$BUILD_FOLDER/standalone" ]; then
    echo -e "${RED}❌ Build failed! .next/standalone folder not found.${NC}"
    exit 1
fi

if [ -d "$DEPLOY_FOLDER" ]; then
    echo -e "${YELLOW}🧹 Cleaning old deploy folder...${NC}"
    rm -rf "$DEPLOY_FOLDER"
fi

echo -e "${YELLOW}📁 Creating deployment folder structure...${NC}"
mkdir -p "$DEPLOY_FOLDER"

cp -r "$BUILD_FOLDER/standalone/." "$DEPLOY_FOLDER/"

if [ -d "$BUILD_FOLDER/static" ]; then
    mkdir -p "$DEPLOY_FOLDER/.next/static"
    cp -r "$BUILD_FOLDER/static" "$DEPLOY_FOLDER/.next/"
fi

if [ -d "public" ]; then
    cp -r "public" "$DEPLOY_FOLDER/"
fi

cp "package.json" "$DEPLOY_FOLDER/"
if [ -f "package-lock.json" ]; then
    cp "package-lock.json" "$DEPLOY_FOLDER/"
elif [ -f "yarn.lock" ]; then
    cp "yarn.lock" "$DEPLOY_FOLDER/"
fi

cat > "$DEPLOY_FOLDER/start.sh" << 'SCRIPT'
#!/bin/bash

if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install --production
fi

echo "Starting Next.js app..."
NODE_ENV=production node server.js
SCRIPT

chmod +x "$DEPLOY_FOLDER/start.sh"

cat > "$DEPLOY_FOLDER/.env.production.example" << 'ENV'
NODE_ENV=production
# Add your production environment variables here
ENV

echo ""
echo -e "${GREEN}✅ Deployment folder created successfully!${NC}"
echo ""
echo -e "${GREEN}📊 Deployment Summary:${NC}"
echo "  Folder: $DEPLOY_FOLDER/"
echo "  Size: $(du -sh "$DEPLOY_FOLDER" | cut -f1)"
echo ""
echo -e "${GREEN}📦 Next Steps:${NC}"
echo "  1. zip -r deploy.zip deploy/"
echo "  2. Upload deploy.zip to your host"
echo "  3. Unzip and run: ./start.sh"
echo ""
