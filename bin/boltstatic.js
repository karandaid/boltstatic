#!/usr/bin/env node

const { boltInitialize, boltBuild, boltServe } = require('../src/core/boltCommands');
const { boltParseArgs } = require('../src/utils/boltArgsParser');

const args = boltParseArgs(process.argv.slice(2));

const command = args._[0];

switch (command) {
  case 'new':
    boltInitialize(args);
    break;
  case 'build':
    boltBuild(args);
    break;
  case 'serve':
    boltServe(args);
    break;
  case 'help':
  default:
    console.log(`
BoltStatic CLI

Usage:
  boltstatic new [project-name]          Initialize a new BoltStatic project
  boltstatic build                       Build the static site
  boltstatic serve                       Serve the site locally with live-reloading
  boltstatic help                        Display help information

Options:
  -h, --help                             Show help
  -v, --version                          Show version number
    `);
    break;
}
