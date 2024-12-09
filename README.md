# Terminal App Starter
A robust boilerplate for building terminal/command-line applications using TypeScript. This starter template is designed for flexibility, maintainability, and developer productivity.

## Features
- TypeScript: Modern, typed JavaScript out of the box.
- Prettier & ESLint: Enforce consistent coding styles and catch common issues.
- Nodemon: Seamless development experience with automatic reloads.
- Husky & Lint-Staged: Pre-commit hooks to ensure clean commits.
- Jest: Integrated for testing to keep your application robust.

## Getting Started
### Prerequisites
- NodeJS 16 or newer
- NPM or Yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/imsomebody/ts-terminal-starter.git
cd ts-terminal-starter
```
2. Install dependencies:
```bash
npm install
```
3. Husky Setup:
```bash
npm run prepare
```

### Development
To start the application in development mode:
```bash
npm run dev
```

This will run the `hello` command. To set wich command to run (or what entry point to use), change the `exec` property of the Nodemon configuration file, [located at `./nodemon.json`](https://github.com/imsomebody/ts-terminal-starter/blob/fc9b859fe40d28fc234446670bf08521ef734f8b/nodemon.json#L1-L5).

### Build
To compile the application:
```bash
npm run build
```

### Linting and Formatting
#### Linting
Linting is done with ESLint. To lint the application:
```bash
npm run lint
```

### Formatting
Formatting is done with Prettier. To format the application:
```bash
npm run format
```

### Testing
Testing is done with Jest, upon running the command below or before a commit. To test the application:
```bash
npm run test
```

### Planned Features
- [ ] Dynamic Command Loading