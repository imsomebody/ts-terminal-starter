#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('my-terminal-app')
  .description('A sample TypeScript CLI application')
  .version('1.0.0');

program
  .command('hello')
  .description('Print hello message')
  .action(() => {
    console.log('Hello, world!');
  });

program.parse(process.argv);
