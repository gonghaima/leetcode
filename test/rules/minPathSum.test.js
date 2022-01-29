import minPathSum from '../../src/rules/minPathSum';
import { inputData, expected } from '../data/minPathSumData';

test('minPathSum should return expected result for case1', () => {
  const result = minPathSum(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('minPathSum should return expected result for case2', () => {
  const result = minPathSum(inputData.case2);
  expect(result).toEqual(expected.case2);
});
