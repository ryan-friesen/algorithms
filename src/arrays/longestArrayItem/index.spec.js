const { longestString } = require('.');

describe('longestString', () => {
    it('should return an integer value of 6 for the longest array', () => {
        expect(longestString(["first", "second", "third"]))
            .withContext('array with three strings as items')
            .toEqual(6);
    });
    it('should return 0 for empty array', () => {
        expect(longestString([]))
            .withContext('value is null')
            .toEqual(0);
    }
    )
    it('should return 6', () => {
        expect(longestString(["sample", null]))
            .withContext('value is null')
            .toBe(6);
    }
    )
});
