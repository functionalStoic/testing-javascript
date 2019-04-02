const utils = require('./utils');

test('should test getWinner function', () => {
  jest.spyOn(utils, 'getWinner');
  utils.getWinner.mockImplementation((p1, p2) => p2);

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds');

  expect(winner).toEqual('Kent C. Dodds');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Ken Wheeler', 'Kent C. Dodds'],
    ['Ken Wheeler', 'Kent C. Dodds'],
  ]);

  // cleanup
  utils.getWinner.mockRestore();
});

function thumbWar(player1, player2) {
  const numberToWin = 2;
  let player1Wins = 0;
  let player2Wins = 0;
  while (player1Wins < numberToWin && player2Wins < numberToWin) {
    const winner = utils.getWinner(player1, player2);
    if (winner === player1) {
      player1Wins++;
    } else if (winner === player2) {
      player2Wins++;
    }
  }
  return player1Wins > player2Wins ? player1 : player2;
}
