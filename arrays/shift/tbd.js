const { shift } = require('./shift');

const arr2 = ['a', 'b', 'c', 'd'];
const expected2 = 'a';
const arr2Expected = ['b', 'c', 'd'];

test('remove the first item of the given array and shift down the remaining items', () => {
  const arr1 = [1, 2, 3];
  const expected1 = 1;
  // after running function arr1 should now be:
  const arr1Expected = [2, 3];

  const actual = shift(arr1);

  // Check that the the given array was returned instead of a new array.
  expect(actual).toBe(arr1);
});
