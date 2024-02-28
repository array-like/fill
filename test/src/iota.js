import test from 'ava';
import {_calloc} from '@array-like/alloc';

import {arrayTypes} from './_fixtures.js';
import {iota} from '#module';

const macro = (t, type) => {
	const calloc = _calloc(type);
	const n = 100;
	const a = calloc(n);

	const reseta = () => {
		for (let i = 0; i < n; ++i) {
			a[i] = 0;
		}
	};

	const check = (i, v, o) => {
		v = v - o + i;
		t.deepEqual(a[i], v, `a[${i}] === ${v}`);
	};

	reseta();

	iota(a, 2, 33, 2);
	iota(a, 16, 87, 3);
	iota(a, 47, 75, 5);
	iota(a, 60, 100, 7);
	iota(a, 80, 81, 11);

	for (let i = 0; i < n; ++i) {
		if (i === 80) {
			check(i, 11, 80);
		} else if (i >= 60) {
			check(i, 7, 60);
		} else if (i >= 47) {
			check(i, 5, 47);
		} else if (i >= 16) {
			check(i, 3, 16);
		} else if (i >= 2) {
			check(i, 2, 2);
		} else {
			check(i, 0, i);
		}
	}
};

macro.title = (title, type) => title ?? type.name;

for (const type of arrayTypes) test(macro, type);
