:icecream: [@array-like/fill](https://array-like.github.io/fill)
==

`ArrayLike` filling functions for JavaScript.
See [docs](https://array-like.github.io/fill/index.html).

```js
import {alloc} from '@array-like/alloc';
import {iota} from '@array-like/fill';

const a = alloc(100); // undefined undefined undefined ...
iota(a, 0, 100, 0);
a; // 0 1 2 3 4 ...

import {fill} from '@array-like/fill';
fill(a, 0, 100, -1);
a; // -1 -1 -1 -1 -1 ...

import {fillfn} from '@array-like/fill';
fillfn(a, 0, 100, () => []);
a; // [] [] [] [] [] ...
a[0] !== a[1]; // true
```

[![License](https://img.shields.io/github/license/array-like/fill.svg)](https://raw.githubusercontent.com/array-like/fill/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@array-like/fill.svg)](https://www.npmjs.org/package/@array-like/fill)
[![Tests](https://img.shields.io/github/workflow/status/array-like/fill/ci:test?event=push&label=tests)](https://github.com/array-like/fill/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/array-like/fill.svg)](https://david-dm.org/array-like/fill)
[![Dev dependencies](https://img.shields.io/david/dev/array-like/fill.svg)](https://david-dm.org/array-like/fill?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/array-like/fill.svg)](https://github.com/array-like/fill/issues)
[![Downloads](https://img.shields.io/npm/dm/@array-like/fill.svg)](https://www.npmjs.org/package/@array-like/fill)

[![Code issues](https://img.shields.io/codeclimate/issues/array-like/fill.svg)](https://codeclimate.com/github/array-like/fill/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/array-like/fill.svg)](https://codeclimate.com/github/array-like/fill/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/array-like/fill/main.svg)](https://codecov.io/gh/array-like/fill)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/array-like/fill.svg)](https://codeclimate.com/github/array-like/fill/trends/technical_debt)
[![Documentation](https://array-like.github.io/fill/badge.svg)](https://array-like.github.io/fill/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@array-like/fill)](https://bundlephobia.com/result?p=@array-like/fill)
