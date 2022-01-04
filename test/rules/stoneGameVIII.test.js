import stoneGameVIII from '../../src/rules/stoneGameVIII';
import { inputData, expected } from '../data/stoneGameVIIIData';

test('stoneGameVIII should return expected result for case1', () => {
  const result = stoneGameVIII(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('stoneGameVIII should return expected result for case2', () => {
  const result = stoneGameVIII(inputData.case2);
  expect(result).toEqual(expected.case2);
});
