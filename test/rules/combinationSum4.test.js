import combinationSum4 from '../../src/rules/combinationSum4';
import { inputData, expected } from '../data/combinationSum4Data';

test('combinationSum4 should return correct result for case1', () => {
  const { nums, target } = inputData.case1;
  const result = combinationSum4(nums, target);
  expect(result).toEqual(expected.case1);
});

test('combinationSum4 should return correct result for case2', () => {
  const { nums, target } = inputData.case2;
  const result = combinationSum4(nums, target);
  expect(result).toEqual(expected.case2);
});
