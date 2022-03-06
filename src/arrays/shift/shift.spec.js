const { shift } = require('.');

/******************************************************************************
Organization pattern:  One describe 'test suite' block & multiple 'it' blocks.

Example failure message format:

Failures:
1) shift should remove and return the first item, and shift the remaining items to the left by one index.
  Message:
    small array: Expected undefined to be 1.

  Message:
    small array:
        Expected $.length = 3 to equal 2.
        Expected $[0] = 1 to equal 2.
        Expected $[1] = 2 to equal 3.
        Unexpected $[2] = 3 in array.

  Message:
    one item array: Expected undefined to be 1.

  Message:
    one item array:
        Expected $.length = 1 to equal 0.
        Unexpected $[0] = 1 in array.

1 spec, 1 failure
*/
// describe('shift', () => {
//   it('should remove and return the first item, and shift the remaining items to the left by one index.', () => {
//     const smallArray = [1, 2, 3];
//     expect(shift(smallArray)).withContext('small array').toBe(1);
//     expect(smallArray).withContext('small array').toEqual([2, 3]);

//     const oneItemArray = [1];
//     expect(shift(oneItemArray)).withContext('one item array').toBe(1);
//     expect(oneItemArray).withContext('one item array').toEqual([]);

//     const emptyArray = [];
//     expect(shift(emptyArray)).withContext('empty array').toBe(undefined);
//     expect(emptyArray).withContext('empty array').toEqual([]);
//   });
// });

/******************************************************************************
Organization pattern: one describe block with multiple 'it' blocks.

Example failure message format:

Failures:
1) shift should return the first item from the given array.
  Message:
    small array: Expected undefined to be 1.

  Message:
    oneItem array: Expected undefined to be 1.

2) shift should shift the remaining items to the left by one index.
  Message:
    small array:
        Expected $.length = 3 to equal 2.
        Expected $[0] = 1 to equal 2.
        Expected $[1] = 2 to equal 3.
        Unexpected $[2] = 3 in array.

  Message:
    one item array:
        Expected $.length = 1 to equal 0.
        Unexpected $[0] = 1 in array.

2 specs, 2 failures
*/
// describe('shift', () => {
//   const smallArray = [1, 2, 3];
//   const oneItemArray = [1];
//   const emptyArray = [];

//   it('should return the first item from the given array.', () => {
//     expect(shift(smallArray)).withContext('small array').toBe(1);
//     expect(shift(oneItemArray)).withContext('oneItem array').toBe(1);
//     expect(shift(emptyArray)).withContext('empty array').toBe(undefined);
//   });

//   it('should shift the remaining items to the left by one index.', () => {
//     expect(smallArray).withContext('small array').toEqual([2, 3]);
//     expect(oneItemArray).withContext('one item array').toEqual([]);
//     expect(emptyArray).withContext('empty array').toEqual([]);
//   });
// });

/******************************************************************************
Organization pattern: nested describe 'test suite' blocks.
- .withContext is not needed now b/c the nested describe provides that context.
- In other situations, .withContext may still be useful here.

Example failure message format:

Failures:
1) shift when given a small array should return the first item from the given array.
  Message:
    small array: Expected undefined to be 1.

2) shift when given a small array should shift the remaining items to the left by one index.
  Message:
    small array:
        Expected $.length = 3 to equal 2.
        Expected $[0] = 1 to equal 2.
        Expected $[1] = 2 to equal 3.
        Unexpected $[2] = 3 in array.

3) shift when given a one item array should return the first item from the given array.
  Message:
    oneItem array: Expected undefined to be 1.

4) shift when given a one item array should shift the remaining items to the left by one index.
  Message:
    one item array:
        Expected $.length = 1 to equal 0.
        Unexpected $[0] = 1 in array.

6 specs, 4 failures
  - The empty array test passes without doing anything.
*/
describe('shift', () => {
  const shouldReturnMsg = 'should return the first item from the given array.';
  const shouldShiftMsg =
    'should shift the remaining items to the left by one index.';

  describe('when given a small array', () => {
    const smallArray = [1, 2, 3];

    it(shouldReturnMsg, () => {
      expect(shift(smallArray)).toBe(1);
    });

    it(shouldShiftMsg, () => {
      expect(smallArray).toEqual([2, 3]);
    });
  });

  describe('when given a one item array', () => {
    const oneItemArray = [1];

    it(shouldReturnMsg, () => {
      expect(shift(oneItemArray)).toBe(1);
    });

    it(shouldShiftMsg, () => {
      expect(oneItemArray).toEqual([]);
    });
  });

  describe('when given a empty array', () => {
    const emptyArray = [];

    it(shouldReturnMsg, () => {
      expect(shift(emptyArray)).toBe(undefined);
    });

    it(shouldShiftMsg, () => {
      expect(emptyArray).toEqual([]);
    });
  });
});
