const browserSync = require('browser-sync').create();
const chokidar = require('chokidar');
const { boltBuild } = require('./boltBuild');
const { boltLogSuccess, boltLogError } = require('../utils/boltLogger');

const boltServe = () => {
  try {
    boltBuild();

    browserSync.init({
      server: {
        baseDir: 'dist',
      },
      port: 3000,
      open: true,
      notify: false,
    });

    const watcher = chokidar.watch(['content/**/*.md', 'themes/**/*.hbs', 'static/**/*'], {
      ignoreInitial: true,
    });

    watcher.on('all', (event, pathChanged) => {
      boltLogSuccess(`Detected ${event} on ${pathChanged}. Rebuilding...`);
      boltBuild();
      browserSync.reload();
    });

    boltLogSuccess('Development server is running at http://localhost:3000');
  } catch (error) {
    boltLogError('Failed to start server:', error);
  }
};

module.exports = {
  boltServe,
};
