## npm-scripts-intro

Demonstrate the execution of several commands in the project

### dev mode

rollup build lib( watch mode )

![prod mode](demo/images/dev-mode.gif)

### build mode

rollup build lib (minify)

![prod mode](demo/images/build-mode.gif)

### conventional commits

angular conventional commits (interactive)
![cz commit](demo/images/cz-commit -progress.gif)

### unit tests

use vitest

#### watch mode

Run all test suites but watch for changes and rerun tests when they change.

![test watch](demo/images/test-watch.gif)

#### product mode (once)

Perform a single run without watch mode.

![ test prod](demo/images/test-prod-once.gif)

### npm publish tarball (local view)

`npm publish --dry-run` (view tarball)

![ npm publish](demo/images/v-pub-tarball.gif)

### release-it

release-it is interactive and allows you to confirm each task before execution:
![release-it-iterative](demo/images/release-it-demo.gif)
