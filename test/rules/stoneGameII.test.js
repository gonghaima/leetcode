import stoneGameII from '../../src/rules/stoneGameII';
import { inputData, expected } from '../data/stoneGameIIData';

test('stoneGameII should return expected result for case1', () => {
  const result = stoneGameII(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('stoneGameII should return expected result for case2', () => {
  const result = stoneGameII(inputData.case2);
  expect(result).toEqual(expected.case2);
});
