const { sum, subtract } = require('./math');

test('sum adds numbers', () => {
  const expected = sum(3, 7);
  const result = 10;
  expect(expected).toBe(result);
});

test('subtract subtracts numbers', () => {
  const expected = subtract(7, 3);
  const result = 4;
  expect(expected).toBe(result);
});

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`𐄂 ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    // toEqual(expected) {},
    // toBeGreaterThan(expected) {},
  };
}
