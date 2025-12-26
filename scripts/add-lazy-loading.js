/**
 * Script to add loading="lazy" to all iframes in markdown files
 * Run with: node scripts/add-lazy-loading.js
 */

const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Single comprehensive pattern: Find any iframe without loading attribute
    // This handles all iframe variations in one pass
    content = content.replace(
      /<iframe([^>]*?)>/g,
      (match, attributes, offset) => {
        // Skip if already has loading attribute
        if (/loading\s*=/.test(attributes)) {
          return match;
        }
        
        // Add loading="lazy" before the closing >
        // Detect indentation using offset (correct position for each match)
        const lines = content.substring(0, offset).split('\n');
        const currentLine = lines[lines.length - 1];
        const indent = currentLine.match(/^(\s*)/)?.[1] || '  ';
        
        return `<iframe${attributes}\n${indent}loading="lazy">`;
      }
    );
    
    // Check if content was modified
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Updated: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  try {
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
  } catch (error) {
    console.error(`✗ Error reading directory ${dir}:`, error.message);
    return 0;
  }
}

console.log('Adding lazy loading to iframes...\n');
const updatedCount = walkDir(docsDir);
console.log(`\n${updatedCount > 0 ? '✓' : '○'} Done! Updated ${updatedCount} file${updatedCount !== 1 ? 's' : ''}.`);