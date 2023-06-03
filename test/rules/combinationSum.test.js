import combinationSum from '../../src/rules/combinationSum';
import { inputData, expected } from '../data/combinationSumData';

test('combinationSum should return correct result for case1', () => {
  const { candidates, target } = inputData.case1;
  const result = combinationSum(candidates, target);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test('combinationSum should return correct result for case2', () => {
  const { candidates, target } = inputData.case2;
  const result = combinationSum(candidates, target);
  expect(result.sort()).toEqual(expected.case2.sort());
});

test('combinationSum should return correct result for case3', () => {
  const { candidates, target } = inputData.case3;
  const result = combinationSum(candidates, target);
  expect(result.sort()).toEqual(expected.case3.sort());
});
