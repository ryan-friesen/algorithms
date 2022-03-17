const { sliceArr } = require('.');

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

const testCases = [
  {
    args: [['a', 'b', 'c', 'd', 'e'], 0, 5],
    expected: ['a', 'b', 'c', 'd', 'e'],
  },
  {
    args: [arr2, startIdx2, endIdx2],
    expected: expected2,
  },
  {
    args: [arr3, startIdx3, endIdx3],
    expected: expected3,
  },
  {
    args: [arr4, startIdx4, endIdx4],
    expected: expected4,
  },
  {
    args: [arr5, startIdx5, endIdx5],
    expected: expected5,
  },
  {
    args: [arr6, startIdx6, endIdx6],
    expected: expected6,
  },
  {
    args: [arr7],
    expected: expected7,
  },
];

describe('slice', () => {
  testCases.forEach((testCase, i) => {
    const {
      args: [arr, startIdx, endIdx],
      expected,
    } = testCase;

    describe(`when given testCases[${i}] with startIdx=${startIdx} endIdx=${endIdx}`, () => {
      //   const actual = sliceArr(...args);
      const clonedArr = [...arr];
      const actual = sliceArr(arr, startIdx, endIdx);

      it('should return a new array from the start idx (inclusive) to the end idx (exclusive).', () => {
        expect(actual).toEqual(expected);
      });

      it('should have returned a new array.', () => {
        expect(actual).not.toBe(arr);
      });

      it('should not have mutated the original array.', () => {
        expect(arr).toEqual(clonedArr);
      });
    });
  });
});
