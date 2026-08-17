const { Liquid } = require('liquidjs');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

console.log('📦 Starting Netlify Static Build Process...');

// 1. Build CSS and JS assets
console.log('⚡ Compiling SCSS and JS...');
execSync('npm run build:css', { cwd: projectRoot, stdio: 'inherit' });
execSync('npm run build:js', { cwd: projectRoot, stdio: 'inherit' });

// 2. Ensure dist directory exists
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 3. Configure Liquid engine
const engine = new Liquid({
  root: [
    path.join(projectRoot, 'templates'),
    path.join(projectRoot, 'layout'),
    path.join(projectRoot, 'sections')
  ],
  extname: '.liquid'
});

engine.registerFilter('asset_url', (input) => `/assets/${input}`);
engine.registerFilter('default', (input, def) => (input !== undefined && input !== null && input !== '') ? input : def);

engine.registerTag('section', {
  parse: function(tagToken) {
    this.sectionName = tagToken.args.trim().replace(/['"]/g, '');
  },
  render: function*(context) {
    const sectionPath = path.join(projectRoot, 'sections', `${this.sectionName}.liquid`);
    if (fs.existsSync(sectionPath)) {
      let content = fs.readFileSync(sectionPath, 'utf8');
      content = content.replace(/{%\s*schema\s*%}[\s\S]*?{%\s*endschema\s*%}/g, '');
      return yield this.liquid.parseAndRender(content, context.getAll());
    }
    return '';
  }
});

engine.registerTag('schema', {
  parse: function() {},
  render: function*() { return ''; }
});

async function renderPage(templateFile, outputFile, pageTitle, reqPath) {
  try {
    const templatePath = path.join(projectRoot, 'templates', templateFile);
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    
    const contentForLayout = await engine.parseAndRender(templateContent, {
      request: { path: reqPath }
    });

    const layoutPath = path.join(projectRoot, 'layout', 'theme.liquid');
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    const html = await engine.parseAndRender(layoutContent, {
      content_for_layout: contentForLayout,
      page_title: pageTitle,
      request: { path: reqPath }
    });

    const outputPath = path.join(distDir, outputFile);
    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(` ✅ Rendered ${outputFile}`);
  } catch (err) {
    console.error(` ❌ Error rendering ${templateFile}:`, err);
    process.exit(1);
  }
}

async function main() {
  // Render pages
  await renderPage('index.liquid', 'index.html', 'M. — Creative Director & Designer Portfolio', '/');
  await renderPage('page.project.liquid', 'project.html', 'Lumina Pavilion — Portfolio Project Detail', '/project.html');
  await renderPage('page.about.liquid', 'about.html', 'About — M. Creative Studio', '/about.html');
  await renderPage('page.contact.liquid', 'contact.html', 'Contact — Get in Touch', '/contact.html');

  // Copy assets folder
  const assetsSrc = path.join(projectRoot, 'assets');
  const assetsDest = path.join(distDir, 'assets');
  fs.cpSync(assetsSrc, assetsDest, { recursive: true });
  console.log(' 📁 Copied static assets to dist/assets/');

  console.log('\n✨ Build complete! Output generated in dist/');
}

main();
