const { sum, subtract } = require('./math');

const sumResult = sum(3, 7);
const expectedSum = 10;

if (sumResult !== expectedSum) {
  throw new Error(`${sumResult} is not equal to ${expectedSum}`);
}

const subtractResult = subtract(7, 3);
const expectedDifference = 4;

if (subtractResult !== expectedDifference) {
  throw new Error(`${subtractResult} is not equal to ${expectedDifference}`);
}
