import stoneGameVI from '../../src/rules/stoneGameVI';
import { inputData, expected } from '../data/stoneGameVIData';

test('stoneGameVI should return expected result for case1', () => {
  const result = stoneGameVI(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('stoneGameVI should return expected result for case2', () => {
  const result = stoneGameVI(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('stoneGameVI should return expected result for case3', () => {
  const result = stoneGameVI(inputData.case3);
  expect(result).toEqual(expected.case3);
});
