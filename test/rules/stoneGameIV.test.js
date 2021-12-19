import stoneGameIV from '../../src/rules/stoneGameIV/dp';
import { inputData, expected } from '../data/stoneGameIVData';

test('stoneGameIV should return expected result for case1', () => {
  const result = stoneGameIV(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('stoneGameIV should return expected result for case2', () => {
  const result = stoneGameIV(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('stoneGameIV should return expected result for case3', () => {
  const result = stoneGameIV(inputData.case3);
  expect(result).toEqual(expected.case3);
});
