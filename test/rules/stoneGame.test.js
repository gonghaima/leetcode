import stoneGame from '../../src/rules/stoneGame/dp';
import { inputData, expected } from '../data/stoneGameData';

test('stoneGame should return expected result for case1', () => {
  const result = stoneGame(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('stoneGame should return expected result for case2', () => {
  const result = stoneGame(inputData.case2);
  expect(result).toEqual(expected.case2);
});
