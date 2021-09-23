# unknownify

Replace any with unknown on type definitions for built-in ECMAScript APIs

## Installation

Add unknownify to your project's devDependencies.

```sh
npm i -D unknownify
```

## Usage

Add type definition file to your project.

```ts
/// <reference path="path/to/node_modules/unknownify/lib/index.d.ts" />
```

Don't forget to override the path to match the directory structure of your project.  
Show example of putting type definition files in the `types` directory.

`types/unknownify.d.ts`:

```ts
/// <reference path="../node_modules/unknownify/lib/index.d.ts" />
```
