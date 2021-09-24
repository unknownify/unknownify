# unknownify

Replace any with unknown on type definitions for built-in ECMAScript APIs

## Installation

Add unknownify to devDependencies of your project.

```sh
npm i -D unknownify
```

## Usage

Add type definition file to your project.

```ts
/// <reference path="path/to/node_modules/unknownify/lib/lib.d.ts" />
// Or, specify type definition files you want to use
/// <reference path="path/to/node_modules/unknownify/lib/lib.es5.d.ts" />
```

Don't forget to override the path to match the directory structure of your project.
