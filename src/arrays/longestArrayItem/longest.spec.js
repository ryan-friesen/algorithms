const { longestString } = require('.');

describe('longestString', () => {
    it('should return an integer value of 6 for the longest array', () => {
        expect(longestString(["first", "second", "third"]))
            .withContext('array with three strings as items')
            .toEqual(6);
    });
});