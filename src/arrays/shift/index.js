const arr1 = [1, 2, 3];
const expected1 = 1;
// after running function arr1 should now be:
const arr1Expected = [2, 3];

const arr2 = ['a', 'b', 'c', 'd'];
const expected2 = 'a';
// after running function arr2 should now be:
const arr2Expected = ['b', 'c', 'd'];

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed value previously at idx 0.
 */
function shift(items) {
  const firstItem = items[0];

  for (let i = 0; i < items.length - 1; i++) {
    items[i] = items[i + 1];
  }

  items.pop();
  return firstItem;
}

module.exports = {
  shift,
};
