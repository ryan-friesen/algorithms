const { sliceArr } = require('.');

describe('slice', () => {
    const testArr = ["a", "b", "c"];
    it('should return an empty array', () => {
        expect(sliceArr(testArr)).toEqual(["a", "b", "c"]);
    }
    )
});

describe('second shift test', () => {
    const testArr2 = ["d", "e", "f"];
    it('should return a single array item', () => {
        expect(sliceArr(testArr2, 1, 2)).toEqual(["e"]);
    })
})