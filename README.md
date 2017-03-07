# object-key-prefixer

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
