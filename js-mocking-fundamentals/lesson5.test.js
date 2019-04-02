const thumbWar = require('./thumbWar');
const utils = require('./utils');

jest.mock('./utils');

test('should test getWinner function', () => {
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds');
  expect(winner).toEqual('Kent C. Dodds');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Ken Wheeler', 'Kent C. Dodds'],
    ['Ken Wheeler', 'Kent C. Dodds'],
  ]);

  // cleanup
  utils.getWinner.mockReset();
});
