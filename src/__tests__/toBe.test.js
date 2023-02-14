const sum = require('../sample/sum');

const string = 'This is Test';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to not equal 4', () => {
  expect(sum(1, 2)).not.toBe(4);
});

test('text equal This is Test', () => {
  expect(string).toBe("This is Test");
});

test('text not equal This is Test', () => {
  expect(string).not.toBe("This is Test2");
});