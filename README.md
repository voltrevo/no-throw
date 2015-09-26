# no-throw [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Wraps a function and makes it return {err, value} instead of throwing.


## Install

```sh
$ npm install --save no-throw
```


## Usage

```js
var noThrow = require('no-throw');

noThrow('Rainbow');
```

## License

MIT © [Andrew Morris](http://andrewmorris.io/)


[npm-image]: https://badge.fury.io/js/no-throw.svg
[npm-url]: https://npmjs.org/package/no-throw
[travis-image]: https://travis-ci.org/voltrevo/no-throw.svg?branch=master
[travis-url]: https://travis-ci.org/voltrevo/no-throw
[daviddm-image]: https://david-dm.org/voltrevo/no-throw.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/voltrevo/no-throw
[coveralls-image]: https://coveralls.io/repos/voltrevo/no-throw/badge.svg
[coveralls-url]: https://coveralls.io/r/voltrevo/no-throw
