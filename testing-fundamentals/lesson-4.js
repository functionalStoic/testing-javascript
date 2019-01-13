const { sumAsync, subtractAsync } = require('./math');

test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(3, 7);
  console.log(result);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtractAsync subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  console.log(result);
  expect(result).toBe(expected);
});
