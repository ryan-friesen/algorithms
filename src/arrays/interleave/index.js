const a = [1, 2, 3];
const b = [4, 5, 6, 7, 8];

/**
 * Interleaves the two given arrays in a zipper like fashion. The longer
 * array's items will be added to the back.
 * - Time: O(n + m) linear. n = a.length, m = b.length.
 * - Space: O(n + m).
 * @param {any[]} arrA The first array to begin interleaving from.
 * @param {any[]} arrB The second array.
 * @returns {any[]} A new array containing the interleaved values.
 */
function interleave(arrA, arrB) {
  const combinedLength = arrA.length + arrB.length;
  const mergedArr = [];

  for (let i = 0; i < combinedLength; i++) {
    if (i < arrA.length) {
      mergedArr.push(arrA[i]);
    }
    if (i < arrB.length) {
      mergedArr.push(arrB[i]);
    }
  }

  return mergedArr;
}

module.exports = {
  interleave,
};
