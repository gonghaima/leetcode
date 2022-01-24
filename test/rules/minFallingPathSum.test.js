import minFallingPathSum from '../../src/rules/minFallingPathSum';

import { inputData, expected } from '../data/minFallingPathSumData';

test('minFallingPathSum should return expected result for case1', () => {
  const result = minFallingPathSum(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('minFallingPathSum should return expected result for case2', () => {
  const result = minFallingPathSum(inputData.case2);
  expect(result).toEqual(expected.case2);
});
