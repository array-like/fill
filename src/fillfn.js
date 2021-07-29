/**
 * Fillfn.
 *
 * @param {{[x: number]: any}} a
 * @param {number} i
 * @param {number} j
 * @param {Function} fn
 */
const fillfn = (a, i, j, fn) => {
	for (; i < j; ++i) a[i] = fn();
};

export default fillfn;
