const utils = require('./utils');
const thumbWar = require('./thumbWar');

function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  return mockFn;
}

test('should test getWinner function', () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = fn(p1 => p1);
  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler');

  expect(winner).toEqual('Kent C. Dodds');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler'],
  ]);

  // cleanup
  utils.getWinner = originalGetWinner;
});
