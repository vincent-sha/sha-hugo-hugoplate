'use strict';
const fs = require('fs');
const path = require('path');

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, filelist);
    } else {
      filelist.push(filepath);
    }
  });
  return filelist;
}

function processFile(filePath) {
  if (!filePath.endsWith('.md')) return;
  let data = fs.readFileSync(filePath, 'utf8');
  if (!data.startsWith('---')) {
    // No frontmatter, add a simple frontmatter with language
    const newData = `---\nlanguage: zh-cn\n---\n\n${data}`;
    fs.writeFileSync(filePath, newData, 'utf8');
    console.log('Added frontmatter to', filePath);
    return;
  }

  // Find the second '---' line to detect end of frontmatter
  const parts = data.split('\n');
  let endIndex = -1;
  for (let i = 1; i < parts.length; i++) {
    if (parts[i].trim() === '---') { endIndex = i; break; }
  }
  if (endIndex === -1) return; // invalid frontmatter

  // Check if language already exists
  const headerLines = parts.slice(1, endIndex);
  const hasLanguage = headerLines.some(line => /^language\s*:\s*/i.test(line));
  if (!hasLanguage) {
    // Insert language after the opening '---' line, preserving indentation/format
    headerLines.unshift('language: zh-cn');
    const newHeader = ['---', ...headerLines, '---'];
    const body = parts.slice(endIndex + 1).join('\n');
    const newData = newHeader.join('\n') + '\n' + body;
    fs.writeFileSync(filePath, newData, 'utf8');
    console.log('Updated frontmatter for', filePath);
  }
}

function main() {
  const target = path.join(process.cwd(), 'content/chinese');
  if (!fs.existsSync(target)) {
    console.error('Target directory does not exist:', target);
    process.exit(1);
  }
  const files = walk(target);
  files.forEach(processFile);
}

main();
