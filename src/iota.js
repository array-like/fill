/**
 * Iota.
 *
 * @param {{[x: number]: any}} a
 * @param {number} i
 * @param {number} j
 * @param {any} v
 */
const iota = (a, i, j, v) => {
	for (; i < j; ++i, ++v) {
		a[i] = v;
	}
};

export default iota;
