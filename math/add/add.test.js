const { add } = require('./add');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 5 + -5 to equal 0', () => {
  expect(add(5, -5)).toBe(0);
});