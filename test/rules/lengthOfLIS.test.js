import lengthOfLIS from '../../src/rules/lengthOfLIS';
import { inputData, expected } from '../data/lengthOfLISData';
test('lengthOfLIS function should return correct sum result from cases data 1', () => {
  expect(lengthOfLIS(inputData.case1)).toEqual(expected.case1);
});

test('lengthOfLIS function should return correct sum result from cases data 1', () => {
  expect(lengthOfLIS(inputData.case2)).toEqual(expected.case2);
});

test('lengthOfLIS function should return correct sum result from cases data 1', () => {
  expect(lengthOfLIS(inputData.case3)).toEqual(expected.case3);
});
