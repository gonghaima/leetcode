import subarraySum from '../../src/rules/subarraySum';
import { inputData, expected } from '../data/subarraySumData';

test('subarraySum should return expected result for case1', () => {
  const { nums, k } = inputData.case1;
  const result = subarraySum(nums, k);
  expect(result).toEqual(expected.case1);
});
test('subarraySum should return expected result for case2', () => {
  const { nums, k } = inputData.case2;
  const result = subarraySum(nums, k);
  expect(result).toEqual(expected.case2);
});
