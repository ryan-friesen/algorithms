const { interleave } = require('./interleave');

test('interleave two same sized arrays', () => {
  expect(interleave([1, 2, 3], ['a', 'b', 'c'])).toContainEqual([
    1,
    2,
    3,
    'a',
    'b',
    'c',
  ]);
});
