module.exports = { getWinner };
/*
 * Returns the winning player or null for a tie
 * Let's pretend this isn't using Math.random() but instead
 * is making a call to some third party machine learning
 * service that has a testing environment we don't control
 * and is unreliable so we want to mock it pout for tests
 */
function getWinner(player1, player2) {
  const winningNumber = Math.random();

  if (winningNumber < 1 / 3) {
    return player1;
  } else if (winningNumber < 2 / 3) {
    return player2;
  } else {
    return null;
  }
}
