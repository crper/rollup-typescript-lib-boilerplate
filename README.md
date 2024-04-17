## rollup-typescript-lib-boilerplate

A starter project that makes creating a TypeScript library extremely easy.

### Features

- Tests using Vitest
- Rollup(v4.x) for bundling and packaging
- Automatic releases and changelog(release-it)
- Lint-staged test (husky and init hooks: pre-commit, commit-msg)
  - eslint、prettier、commitlint、vitest
- The configuration file template released by the npm package (refer to package.json)
- Automatic types (\*.d.ts) file generation (typescript v5.x)

### Usage

```
# 1. clone repo
git clone https://github.com/crper/rollup-typescript-lib-boilerplate.git my-project

# 2. cd to project directory
cd my-project

# 3. pnpm install dependencies
pnpm install


# ----- npm scripts -----

# run development mode  (output)
pnpm watch

# run production mode (output minify)
pnpm build


# run tests
# Run all test suites but watch for changes and rerun tests when they change.
pnpm test


# Perform a single run without watch mode.
pnpm test:prod

# interactive commit (Angular Conventional Commit)
pnpm commit

# npm publish --dry-run (view tarball)
pnpm v-pub-tarball

# release-it is interactive and allows you to confirm each task before execution:
pnpm release

```

#### NPM Scripts Demo Gif

[npm-scripts-intro.md](npm-scripts-intro.md)

### Technologies

| Name       | Version | Github                                  |
| ---------- | ------- | --------------------------------------- |
| rollup     | 4.x     | https://github.com/rollup/rollup        |
| typescript | 5.x     | https://github.com/microsoft/TypeScript |
| vitest     | 1.x     | https://github.com/vitest-dev/vitest    |
| eslint     | 8.x     | https://github.com/eslint/eslint        |
| pnpm       | 8.x     | https://github.com/pnpm/pnpm            |

### FAQ

1. Q: (!) @rollup/plugin-typescript TS5096: Option 'allowImportingTsExtensions' can only be used when either 'noEmit' or 'emitDeclarationOnly' is set.

known issue: [https://github.com/rollup/plugins/issues/1536](https://github.com/rollup/plugins/issues/1536)

**Enjoy!**
