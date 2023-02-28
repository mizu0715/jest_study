const string = 'This is Test';

test('text match This is Test', () => {
  expect(string).toMatch(/Test/);
});

test('text not match This is Test', () => {
  expect(string).not.toMatch(/Test2/);
});

export {}
