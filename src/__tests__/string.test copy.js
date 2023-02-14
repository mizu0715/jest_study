const text = require('../sample/string');

test('text equal This is Test', () => {
  expect(text()).toMatch("This is Test");
});

test('text not equal This is Test', () => {
  expect(text()).not.toMatch("This is Test2");
});
