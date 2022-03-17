const { countEvenNegatives } = require('.');

describe('Counts the even negative numbers in an array', () => {
  it('should return [-2, -4, -6]', () => {
    expect(countEvenNegatives([-2, -6, 4, -1, 9, 3])).toEqual(2);
  });
});
