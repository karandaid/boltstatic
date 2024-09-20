const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const MarkdownIt = require('markdown-it');
const yaml = require('yaml');
const { boltLogSuccess, boltLogError } = require('../utils/boltLogger');

const md = new MarkdownIt();

const boltBuild = () => {
  try {
    // Read configuration
    const configFile = fs.readFileSync('config.yaml', 'utf8');
    const config = yaml.parse(configFile);

    // Read all Markdown files
    const postsDir = path.join(process.cwd(), 'content/posts');
    const pagesDir = path.join(process.cwd(), 'content/pages');

    const readMarkdownFiles = (dir) => {
      const files = fs.readdirSync(dir);
      return files.filter((file) => file.endsWith('.md')).map((file) => path.join(dir, file));
    };

    const postFiles = readMarkdownFiles(postsDir);
    const pageFiles = readMarkdownFiles(pagesDir);

    // Compile templates
    const layoutPath = path.join(process.cwd(), 'themes', config.theme, 'layouts', 'default.hbs');
    const layoutTemplate = fs.readFileSync(layoutPath, 'utf8');
    const layout = Handlebars.compile(layoutTemplate);

    // Register helpers
    Handlebars.registerHelper('boltRange', function (start, end, options) {
      let accum = '';
      for (let i = start; i < end; i++) {
        accum += options.fn(i);
      }
      return accum;
    });

    Handlebars.registerHelper('boltIf', function (conditional, options) {
      if (conditional) {
        return options.fn(this);
      }
      return options.inverse(this);
    });

    // Process posts
    postFiles.forEach((file) => {
      const fileContent = fs.readFileSync(file, 'utf8');
      const { data, content } = parseMarkdown(fileContent);
      const htmlContent = md.render(content);

      const pageData = {
        ...data,
        content: htmlContent,
      };

      const result = layout(pageData);

      const outputDir = path.join(process.cwd(), 'dist', 'posts', data.slug);
      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(path.join(outputDir, 'index.html'), result);
    });

    // Process pages
    pageFiles.forEach((file) => {
      const fileContent = fs.readFileSync(file, 'utf8');
      const { data, content } = parseMarkdown(fileContent);
      const htmlContent = md.render(content);

      const pageData = {
        ...data,
        content: htmlContent,
      };

      const result = layout(pageData);

      const outputDir = path.join(process.cwd(), 'dist', data.slug);
      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(path.join(outputDir, 'index.html'), result);
    });

    // Copy static assets
    const staticSrc = path.join(process.cwd(), 'static');
    const staticDest = path.join(process.cwd(), 'dist', 'static');
    copyFolderRecursiveSync(staticSrc, staticDest);

    boltLogSuccess('Site built successfully!');
  } catch (error) {
    boltLogError('Build failed:', error);
  }
};

const parseMarkdown = (fileContent) => {
  const delimiter = '---';
  const parts = fileContent.split(delimiter);
  const data = yaml.parse(parts[1]);
  const content = parts.slice(2).join(delimiter).trim();
  return { data, content };
};

const copyFolderRecursiveSync = (source, target) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  if (fs.lstatSync(source).isDirectory()) {
    const files = fs.readdirSync(source);
    files.forEach((file) => {
      const curSource = path.join(source, file);
      const curTarget = path.join(target, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, curTarget);
      } else {
        fs.copyFileSync(curSource, curTarget);
      }
    });
  }
};

module.exports = {
  boltBuild,
};
