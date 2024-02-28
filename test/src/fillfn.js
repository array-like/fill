import test from 'ava';

import {_calloc} from '@array-like/alloc';

import {arrayTypes} from './_fixtures.js';

import {fillfn} from '#module';

const macro = (t, type) => {
	const calloc = _calloc(type);

	const n = 100;
	const a = calloc(n);

	const reseta = () => {
		for (let i = 0; i < n; ++i) {
			a[i] = 0;
		}
	};

	const check = (i, v) => {
		t.deepEqual(a[i], v, `a[${i}] === ${v}`);
	};

	reseta();

	fillfn(a, 2, 33, () => 1 + 1);
	fillfn(a, 16, 87, () => 1 * 3);
	fillfn(a, 47, 75, () => 10 / 2);
	fillfn(a, 60, 100, () => Math.sqrt(49));
	fillfn(a, 80, 81, () => 20 - 9);

	for (let i = 0; i < n; ++i) {
		if (i === 80) {
			check(i, 11);
		} else if (i >= 60) {
			check(i, 7);
		} else if (i >= 47) {
			check(i, 5);
		} else if (i >= 16) {
			check(i, 3);
		} else if (i >= 2) {
			check(i, 2);
		} else {
			check(i, 0);
		}
	}
};

macro.title = (title, type) => title ?? type.name;

for (const type of arrayTypes) test(macro, type);
