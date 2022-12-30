import maxPathSum from '../../src/rules/maxPathSum';
import { inputData, expected } from '../data/maxPathSumData';

test('maxPathSum should return correct result for case1', () => {
  const result = maxPathSum(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('maxPathSum should return correct result for case2', () => {
  const result = maxPathSum(inputData.case2);
  expect(result).toEqual(expected.case2);
});
