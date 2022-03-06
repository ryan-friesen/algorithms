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
function countEvenNegatives(nums) {
  let negativeEvenCount = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0 && nums[i] < 0) {
      negativeEvenCount++;
    }
  }
  return negativeEvenCount;
}

module.exports = {
  countEvenNegatives,
};
