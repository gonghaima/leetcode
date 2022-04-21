import openLock from '../../src/rules/openLock';
import { inputData, expected } from '../data/openLockData';

test('openLock should return the distance for case1', () => {
  const { deadends, target } = inputData.case1;
  const result = openLock(deadends, target);
  expect(result).toBe(expected.case1);
});

test('openLock should return the distance for case2', () => {
  const { deadends, target } = inputData.case2;
  const result = openLock(deadends, target);
  expect(result).toBe(expected.case2);
});
