const arr1 = ['a', 'b', 'c', 'd', 'e'];
const startIdx1 = 0;
const endIdx1 = 5;
const expected1 = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['a', 'b', 'c', 'd', 'e'];
const startIdx2 = 0;
const endIdx2 = 1;
const expected2 = ['a'];

const arr3 = ['a', 'b', 'c', 'd', 'e'];
const startIdx3 = 1;
const endIdx3 = 2;
const expected3 = ['b'];

const arr4 = ['a', 'b', 'c', 'd', 'e'];
const startIdx4 = -100;
const endIdx4 = 100;
const expected4 = ['a', 'b', 'c', 'd', 'e'];

const arr5 = ['a', 'b', 'c', 'd', 'e'];
const startIdx5 = 0;
const endIdx5 = 0;
const expected5 = [];

const arr6 = ['a', 'b', 'c', 'd', 'e'];
const startIdx6 = 1;
const endIdx6 = 1;
const expected6 = [];

const arr7 = ['a', 'b', 'c', 'd', 'e'];
// no indexes provided
const expected7 = ['a', 'b', 'c', 'd', 'e'];

/**
 * Returns a slice of given arr from startidx inclusive to endIdx exclusive.
 * If no indexes are provided, the whole array is copied into a new array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @param {number} startIdx
 * @param {number} endIdx
 * @returns {Array<any>} The new array slice.
 */
function sliceArr(items, startIdx = 0, endIdx = items.length) {
  return items.slice(startIdx, endIdx);
}

module.exports = {
  sliceArr,
};
