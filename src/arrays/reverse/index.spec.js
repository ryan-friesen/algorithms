const { reverseArr } = require('.');

describe('reverseArr', () => {
    const shouldReturnMsg = 'should return a reversed array.';
    const shouldMutateMsg = 'should have returned the given array, not a new array.';

    describe('when given a three item array', () => {
        const inputArr = [1, 2, 3];
        const outputArr = reverseArr(inputArr);

        it(shouldReturnMsg, () =>
            expect(outputArr).toEqual([3, 2, 1])
        );

        it(shouldMutateMsg, () => {
            expect(inputArr).toBe(outputArr)
        });
    })

    describe('when given an empty array', () => {
        const inputArr = [];
        const outputArr = reverseArr(inputArr);

        it(shouldReturnMsg, () =>
            expect(outputArr).toEqual([])
        );

        it(shouldMutateMsg, () => {
            expect(inputArr).toBe(outputArr)
        });
    });

    describe('when given a 1 item array', () => {
        const inputArr = [1];
        const outputArr = reverseArr(inputArr);

        it(shouldReturnMsg, () =>
            expect(outputArr).toEqual([1])
        );

        it(shouldMutateMsg, () => {
            expect(inputArr).toBe(outputArr)
        });
    });

    describe('when given one-through-ten', () => {
        const inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const outputArr = reverseArr(inputArr);

        it(shouldReturnMsg, () =>
            expect(outputArr).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
        );

        it(shouldMutateMsg, () => {
            expect(inputArr).toBe(outputArr)
        });
    })
});