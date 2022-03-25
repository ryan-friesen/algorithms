/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

const nums5 = [1, 2, 3, 4, 4, 5];
const expected5 = [1, 2, 3, 5]

function oddOccurrencesInArray(nums) {
    const counts = {};
    for (const num of nums) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    const countsArr = Object.entries(counts);
    const countsArrLength = countsArr.length;
    const outputtedArr = [];
    for (i = 0; i < countsArrLength; i++) {
        if (countsArr[i][1] % 2 != 0) {
            outputtedArr.push(parseInt(countsArr[i][0]));
            console.log(countsArr[i][0]);
        }
    }
    return outputtedArr;
}
console.log(oddOccurrencesInArray([1, 2, 3, 3, 4]));
module.exports = { oddOccurrencesInArray };
