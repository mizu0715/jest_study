test('to have length', () => {
  expect([1, 2, 3]).toHaveLength(3);
});

test('not to have length', () => {
  expect([1, 2, 3, 4, 5]).not.toHaveLength(4);
});

export {}
