/**
 * Fill.
 *
 * @param {{[x: number]: any}} a
 * @param {number} i
 * @param {number} j
 * @param {any} v
 */
const fill = (a, i, j, v) => {
	for (; i < j; ++i) {
		a[i] = v;
	}
};

export default fill;
