import stoneGameVII from '../../src/rules/stoneGameVII';
import { inputData, expected } from '../data/stoneGameVIIData';

test('stoneGameVII should return expected result for case1', () => {
  const result = stoneGameVII(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('stoneGameVII should return expected result for case2', () => {
  const result = stoneGameVII(inputData.case12);
  expect(result).toEqual(expected.case2);
});
