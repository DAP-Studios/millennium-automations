import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');
const targetSizeMB = 25;
const targetSizeBytes = targetSizeMB * 1024 * 1024;

async function getDirectorySize(dirPath) {
  let totalSize = 0;
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = path.join(dirPath, file.name);
    if (file.isDirectory()) {
      totalSize += await getDirectorySize(filePath);
    } else {
      const stats = fs.statSync(filePath);
      totalSize += stats.size;
    }
  }
  return totalSize;
}

async function optimizeImage(filePath, quality = 80) {
  const ext = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath);
  
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    return;
  }

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Resize if too large (max width 1920px for hero images, 800px for products)
    const maxWidth = fileName.includes('hero') ? 1920 : 800;
    
    if (ext === '.png') {
      await image
        .resize(maxWidth, null, { withoutEnlargement: true })
        .png({ quality, compressionLevel: 9 })
        .toFile(filePath + '.tmp');
    } else {
      await image
        .resize(maxWidth, null, { withoutEnlargement: true })
        .jpeg({ quality, progressive: true, mozjpeg: true })
        .toFile(filePath + '.tmp');
    }
    
    // Replace original only if compressed version is smaller
    const originalSize = fs.statSync(filePath).size;
    const compressedSize = fs.statSync(filePath + '.tmp').size;
    
    if (compressedSize < originalSize) {
      fs.unlinkSync(filePath);
      fs.renameSync(filePath + '.tmp', filePath);
      console.log(`✓ Optimized: ${fileName} (${(originalSize / 1024).toFixed(1)}KB → ${(compressedSize / 1024).toFixed(1)}KB)`);
    } else {
      fs.unlinkSync(filePath + '.tmp');
      console.log(`- Skipped: ${fileName} (already optimized)`);
    }
  } catch (error) {
    console.error(`✗ Error optimizing ${fileName}:`, error.message);
    if (fs.existsSync(filePath + '.tmp')) {
      fs.unlinkSync(filePath + '.tmp');
    }
  }
}

async function optimizeDirectory(dirPath, quality = 80) {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = path.join(dirPath, file.name);
    
    if (file.isDirectory()) {
      await optimizeDirectory(filePath, quality);
    } else {
      await optimizeImage(filePath, quality);
    }
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  // Check initial size
  const initialSize = await getDirectorySize(assetsDir);
  console.log(`Initial size: ${(initialSize / 1024 / 1024).toFixed(2)} MB\n`);
  
  // Start with quality 80
  let quality = 80;
  await optimizeDirectory(assetsDir, quality);
  
  // Check size and reduce quality if needed
  let currentSize = await getDirectorySize(assetsDir);
  
  while (currentSize > targetSizeBytes && quality > 50) {
    quality -= 10;
    console.log(`\n📉 Still ${(currentSize / 1024 / 1024).toFixed(2)} MB. Reducing quality to ${quality}%...\n`);
    await optimizeDirectory(assetsDir, quality);
    currentSize = await getDirectorySize(assetsDir);
  }
  
  const finalSize = await getDirectorySize(assetsDir);
  const saved = initialSize - finalSize;
  const savedPercent = ((saved / initialSize) * 100).toFixed(1);
  
  console.log('\n✅ Optimization complete!');
  console.log(`Initial: ${(initialSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Final: ${(finalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved: ${(saved / 1024 / 1024).toFixed(2)} MB (${savedPercent}%)`);
  
  if (finalSize > targetSizeBytes) {
    console.log(`\n⚠️  Warning: Final size is still above ${targetSizeMB}MB target.`);
    console.log(`Consider removing unused images or converting to WebP format.`);
  }
}

main().catch(console.error);
