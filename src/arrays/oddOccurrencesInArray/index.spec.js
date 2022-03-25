const { oddOccurrencesInArray } = require('.');

const arr1 = [1, 2, 4, 2, 5];
const expected1 = [1, 4, 5];

const arr2 = [1, 2, 3, 4, 5];
const expected2 = [1, 2, 3, 4, 5];

const arr3 = [1, 7, 3, 6, 6, 2, 8, 6, 10, 10];
const expected3 = [1, 2, 3, 6, 7, 8]

const testCases = [
    {
        args: arr1,
        expected: expected1,
    },
    {
        args: arr2,
        expected: expected2,
    },
    {
        args: arr3,
        expected: expected3,
    }
]

describe('lists the unpaired number values in array', () => {
    testCases.forEach((testCase, i) => {
        const {
            args,
            expected,
        } = testCase;

        describe(`the array ${args} will output ${expected}`, () => {
            it(`should equal ${expected}`, () => {
                expect(oddOccurrencesInArray(args)).toEqual(expected);
            })
        })
    })
});