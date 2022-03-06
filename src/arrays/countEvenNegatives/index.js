const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
const expected1 = 3;

/**
 * Counts how many numbers are both even and negative.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums1) {
  console.log(nums1);
  let sortedArray = nums1.sort((a, b) => a - b);
  let negativeEvenCount = [];
  for (i = 0; i < sortedArray.length; i++ ) {
    if(sortedArray[i] % 2 == 0 && sortedArray[i] < 0) {
      negativeEvenCount.push(sortedArray[i]);
    }
  }
  console.log(sortedArray);
  console.log(negativeEvenCount);
}

countEvenNegatives(nums1);

module.exports = {
  countEvenNegatives,
};
