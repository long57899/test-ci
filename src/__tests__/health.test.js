import stateOfHelth from '../health.js';
// Data-Driven ТЕСТЫ

test.each([
  [290, 'healthy'],
  [90, 'healthy'],
  [50, 'wounded'],
  [45, 'wounded'],
  [15, 'wounded'],
  [10, 'critical'],
  [0, 'critical'],
  [-10, 'critical'],
])('testing state of health function with indicator persents %p', (percents, expected) => {
  const result = stateOfHelth({ name: 'Some kind of hero', health: percents });
  expect(result).toEqual(expected);
});
