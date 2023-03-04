import maxCoins from '../../src/rules/maxCoins';
import { inputData, expected } from '../data/maxCoinsData';

test('maxCoins should return the distance for case1', () => {
  const result = maxCoins(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('maxCoins should return the distance for case2', () => {
  const result = maxCoins(inputData.case2);
  expect(result).toEqual(expected.case2);
});
