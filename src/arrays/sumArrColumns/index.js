const numbersA1 = [20, 10, 30];
const numbersB1 = [10, 30, 20];
const expected1 = [30, 40, 50];

/**
 * Returns a new array that is the sum of the columns of the two given arrays
 * of equal lengths.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums1
 * @param {Array<number>} nums2
 * @returns {Array<number>} The column sums.
 */
function sumArrColumns(nums1, nums2) {
  let sumArr = [];
  for (let i = 0; i < nums1.length; i++) {
    sumArr[i] = nums1[i] + nums2[i];
  }
  return sumArr;
}

const sumArrColumnsFunctional = (nums1, nums2) =>
  nums1.map((num1, i) => num1 + nums2[i]);

module.exports = {
  sumArrColumns: sumArrColumns,
  sumArrColumnsFunctional: sumArrColumnsFunctional,
};
