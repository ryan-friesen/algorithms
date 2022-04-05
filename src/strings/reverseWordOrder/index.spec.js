const { reverseWordOrder } = require('.');

describe('reverseWordOrder', () => {
  const str1 = 'This is a test';
  const expected1 = 'test a is This';

  const str2 = 'hello';
  const expected2 = 'hello';

  const testCases = [
    { arg: str1, expected: expected1 },
    { arg: str2, expected: expected2 },
  ];

  testCases.forEach(({ arg, expected }, i) => {
    describe(`when given "${arg}"`, () => {
      it('should return a string with the order of the space separated words reversed, but the words themselves should not be reversed.', () => {
        expect(reverseWordOrder(arg)).toEqual(expected);
      });
    });
  });
});
