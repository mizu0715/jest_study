const hoge = null;
const foo = 'foo';

test('to null', () => {
  expect(hoge).toBeNull();
});

test('not to null', () => {
  expect(foo).not.toBeNull();
});

export {}
