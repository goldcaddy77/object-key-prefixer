# object-key-prefixer
[<img title="Version" src="https://img.shields.io/npm/v/object-key-prefixer.svg?style=flat-square" />](https://www.npmjs.org/package/serverless-elasticsearch-client)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)
[![license](https://img.shields.io/npm/l/serverless.svg)](https://www.npmjs.com/package/serverless)

## A JavaScript object key prefixer

A simple method that takes an object and returns a new object where all of the top-level keys have been prefixed by some string.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```bash
npm install --save object-key-prefixer
```

## Usage

```javascript
var prefixer = require('object-key-prefixer');
var obj = {
  one: 'foo',
  two: {
    bar: 'baz'
  }
}

prefixer(obj, 'awesome_')
```

Output:

```javascript
{
  awesome_one: 'foo',
  awesome_two: {
    bar: 'baz'
  }
}
```

## Contribute

PRs accepted.  Note that code uses [standard](https://github.com/feross/standard) styling.

## License

MIT © Dan Caddigan
