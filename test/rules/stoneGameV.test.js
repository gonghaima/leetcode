import stoneGameV from '../../src/rules/stoneGameV/dp1';
import { inputData, expected } from '../data/stoneGameVData';

test('stoneGameV should return expected result for case1', () => {
  const result = stoneGameV(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('stoneGameV should return expected result for case2', () => {
  const result = stoneGameV(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('stoneGameV should return expected result for case3', () => {
  const result = stoneGameV(inputData.case3);
  expect(result).toEqual(expected.case3);
});
