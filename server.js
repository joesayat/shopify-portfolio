const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure Liquid engine for Shopify structure
const engine = new Liquid({
  root: [
    path.resolve(__dirname, 'templates'),
    path.resolve(__dirname, 'layout'),
    path.resolve(__dirname, 'sections')
  ],
  extname: '.liquid'
});

// Custom Liquid filters to simulate Shopify
engine.registerFilter('asset_url', (input) => `/assets/${input}`);
engine.registerFilter('default', (input, def) => (input !== undefined && input !== null && input !== '') ? input : def);

// Register custom {% section %} tag to render sections dynamically
engine.registerTag('section', {
  parse: function(tagToken) {
    this.sectionName = tagToken.args.trim().replace(/['"]/g, '');
  },
  render: function*(context) {
    const sectionPath = path.resolve(__dirname, 'sections', `${this.sectionName}.liquid`);
    if (fs.existsSync(sectionPath)) {
      let content = fs.readFileSync(sectionPath, 'utf8');
      // Strip {% schema %} tags from Liquid rendering
      content = content.replace(/{%\s*schema\s*%}[\s\S]*?{%\s*endschema\s*%}/g, '');
      return yield this.liquid.parseAndRender(content, context.getAll());
    }
    return '';
  }
});

// Register dummy schema block tag
engine.registerTag('schema', {
  parse: function() {},
  render: function*() { return ''; }
});

// Serve static assets (CSS, JS, images)
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Helper to render layout wrapping template content
async function renderShopifyPage(res, templateFile, pageTitle, reqPath) {
  try {
    const templatePath = path.join(__dirname, 'templates', templateFile);
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    
    // Render content for layout
    const contentForLayout = await engine.parseAndRender(templateContent, {
      request: { path: reqPath }
    });

    // Render full layout
    const layoutPath = path.join(__dirname, 'layout', 'theme.liquid');
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    const html = await engine.parseAndRender(layoutContent, {
      content_for_layout: contentForLayout,
      page_title: pageTitle,
      request: { path: reqPath }
    });

    res.send(html);
  } catch (err) {
    console.error('Error rendering template:', err);
    res.status(500).send(`Liquid Engine Rendering Error: ${err.message}`);
  }
}

// Routes
app.get('/', (req, res) => renderShopifyPage(res, 'index.liquid', 'M. — Creative Director & Designer Portfolio', '/'));
app.get('/index.html', (req, res) => renderShopifyPage(res, 'index.liquid', 'M. — Creative Director & Designer Portfolio', '/index.html'));
app.get('/project.html', (req, res) => renderShopifyPage(res, 'page.project.liquid', 'Lumina Pavilion — Portfolio Project Detail', '/project.html'));
app.get('/about.html', (req, res) => renderShopifyPage(res, 'page.about.liquid', 'About — M. Creative Studio', '/about.html'));
app.get('/contact.html', (req, res) => renderShopifyPage(res, 'page.contact.liquid', 'Contact — Get in Touch', '/contact.html'));

// Start server
app.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 Shopify Editorial Portfolio Local Server Ready!`);
  console.log(`🌐 Local Preview: http://localhost:${PORT}`);
  console.log(`==================================================\n`);
});
