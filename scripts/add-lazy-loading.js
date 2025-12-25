/**
 * Script to add loading="lazy" to all iframes in markdown files
 * Run with: node scripts/add-lazy-loading.js
 */

const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Pattern 1: iframe with scrolling="no" followed by webkitAllowFullScreen (no loading attribute)
  const pattern1 = /(<iframe[^>]*scrolling="no"[^>]*?)(\s+webkitAllowFullScreen)/g;
  if (pattern1.test(content)) {
    content = content.replace(pattern1, (match, p1, p2) => {
      if (!match.includes('loading=')) {
        modified = true;
        return p1 + '\n  loading="lazy"' + p2;
      }
      return match;
    });
  }
  
  // Pattern 2: iframe with scrolling="no" but no loading attribute anywhere
  const pattern2 = /(<iframe[^>]*scrolling="no"[^>]*?)(>)/g;
  if (pattern2.test(content)) {
    content = content.replace(pattern2, (match, p1, p2) => {
      if (!match.includes('loading=')) {
        modified = true;
        return p1 + '\n  loading="lazy"' + p2;
      }
      return match;
    });
  }
  
  // Pattern 3: YouTube iframes with frameborder but no loading
  const pattern3 = /(<iframe[^>]*frameborder="0"[^>]*?)(\s+allow=)/g;
  if (pattern3.test(content)) {
    content = content.replace(pattern3, (match, p1, p2) => {
      if (!match.includes('loading=')) {
        modified = true;
        return p1 + '\n    loading="lazy"' + p2;
      }
      return match;
    });
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
    return true;
  }
  return false;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let count = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      count += walkDir(filePath);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      if (processFile(filePath)) {
        count++;
      }
    }
  });
  
  return count;
}

console.log('Adding lazy loading to iframes...');
const updatedCount = walkDir(docsDir);
console.log(`\nDone! Updated ${updatedCount} files.`);

