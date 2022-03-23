const { sumArrColumns, sumArrColumnsFunctional } = require('.');

describe('sumArrColumns', () => {
  it('should return the sum of two same-length arrays', () =>
    expect(sumArrColumns([1, 2, 3], [11, 12, 13])).toEqual([12, 14, 16]));
});

describe('sumArrColumnsFunctional', () => {
  it('should return the sum of arrays using functional syntax', () =>
    expect(sumArrColumnsFunctional([2, 4, 6], [22, 44, 66])).toEqual([
      24, 48, 72,
    ]));
});
