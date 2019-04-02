const utils = require('./utils');
const thumbWar = require('./thumbWar');

test('should test getWinner function', () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = p1 => p1;
  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler');
  expect(winner).toEqual('Kent C. Dodds');
  utils.getWinner = originalGetWinner;
});
