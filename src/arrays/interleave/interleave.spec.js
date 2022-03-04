const { interleave } = require('.');

describe('interleave', () => {
  it('should interleave the two given arrays like a zipper.', () => {
    expect(interleave([1, 2, 3], ['a', 'b', 'c']))
      .withContext('same sized arrays')
      .toEqual([1, 'a', 2, 'b', 3, 'c']);

    expect(interleave([10, 20, 30, 40, 50], [1, 2]))
      .withContext('first array larger')
      .toEqual([10, 1, 20, 2, 30, 40, 50]);

    expect(interleave([1, 2], [10, 20, 30, 40, 50]))
      .withContext('second array larger')
      .toEqual([1, 10, 2, 20, 30, 40, 50]);

    expect(interleave([], [])).withContext('empty arrays').toEqual([]);

    expect(interleave([], [1, 2]))
      .withContext('first array empty')
      .toEqual([1, 2]);

    expect(interleave([1, 2], []))
      .withContext('second array empty')
      .toEqual([1, 2]);
  });

  it('should return a new array and not mutate the given arrays.', () => {
    const arrA = [1, 2, 3];
    const arrB = ['a', 'b', 'c'];
    const actual = interleave(arrA, arrB);

    expect(arrA)
      .withContext('given arrays should not be mutated')
      .toEqual([1, 2, 3]);

    expect(arrB)
      .withContext('given arrays should not be mutated')
      .toEqual(['a', 'b', 'c']);

    expect(actual).withContext('a new array should be returned').not.toBe(arrA);
    expect(actual).withContext('a new array should be returned').not.toBe(arrB);
  });
});
