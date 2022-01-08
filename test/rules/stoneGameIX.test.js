import stoneGameIX from '../../src/rules/stoneGameIX';
import { inputData, expected } from '../data/stoneGameIXData';

test('stoneGameIX should return expected result for case1', () => {
  const result = stoneGameIX(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('stoneGameIX should return expected result for case2', () => {
  const result = stoneGameIX(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('stoneGameIX should return expected result for case3', () => {
  const result = stoneGameIX(inputData.case3);
  expect(result).toEqual(expected.case3);
});
