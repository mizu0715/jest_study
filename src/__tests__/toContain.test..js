const colorList = [
  'red',
  'blue',
  'yellow',
];

test('contain color', () => {
  expect(colorList).toContain('red');
  expect(colorList).toContain('blue');
});

test('not contain color', () => {
  expect(colorList).not.toContain('green');
});
