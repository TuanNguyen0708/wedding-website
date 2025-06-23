#!/bin/bash

cd /root/wedding-website || exit

echo "📥 Pulling latest code..."
git pull origin master

echo "🧹 Cleaning Next.js cache..."
rm -rf .next/cache

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building static site..."
npm run build

echo "🚀 Restarting PM2 process..."
pm2 restart ecosystem.config.js
