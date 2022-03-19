const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
const expected1 = 3;
const nums2 = [10, 0, 3, 2];
const expected2 = 0;
/**
 * Counts how many numbers are both even and negative.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums = []) {
  let numsLength = nums.filter((n) => n < 0 && n % 2 === 0).length;
  return numsLength;
}

const countEvenNegatives2 = (nums = []) =>
  nums.filter((n) => n < 0 && n % 2 === 0).length;

module.exports = {
  countEvenNegatives
};
