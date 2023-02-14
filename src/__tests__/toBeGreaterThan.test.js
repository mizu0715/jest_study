test('to greater than', () => {
  expect(10).toBeGreaterThan(9);
});

test('not to greater than', () => {
  expect(5).not.toBeGreaterThan(6); // toBeLessThan
});
