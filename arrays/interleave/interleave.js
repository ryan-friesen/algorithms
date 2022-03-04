const a = [1, 2, 3];
const b = [4, 5, 6, 7, 8];

/**
 * Interleaves the two given arrays in a zipper like fashion. The longer
 * array's items will be added to the back.
 * @param {any[]} a The first array to begin interleaving from.
 * @param {any[]} b The second array.
 * @returns {any[]} A new array containing the interleaved values.
 */
function interleave(a, b) {
  const combinedLength = a.length + b.length;
  const mergedArr = [];

  for (let i = 0; i < combinedLength; i++) {
    if (i < a.length) {
      mergedArr.push(a[i]);
    }
    if (i < b.length) {
      mergedArr.push(b[i]);
    }
  }

  return mergedArr;
}

const actual1 = interleave(a, b);
const expected1 = [1, 4, 2, 5, -2, 6, 7, 8];

module.exports = {
  interleave: interleave,
};
