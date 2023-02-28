test('to less than', () => {
  expect(5).toBeLessThan(6);
});

test('not to less than', () => {
  expect(10).not.toBeLessThan(9); // toBeGreaterThan
});

export {}
