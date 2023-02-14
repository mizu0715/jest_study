const obj1 = {
  'id': 1,
  'name' : 'taro',
}
const obj2 = {
  'id': 1,
  'name' : 'taro',
}
const obj3 = {
  'id': 2,
  'name' : 'ziro',
}

test('to equal', () => {
  expect(obj1).toEqual(obj2);
});

test('not to equal', () => {
  expect(obj1).not.toEqual(obj3);
});
