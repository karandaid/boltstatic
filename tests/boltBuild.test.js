const { boltBuild } = require('../src/core/boltBuild');

test('boltBuild runs without errors', () => {
  expect(() => boltBuild()).not.toThrow();
});
