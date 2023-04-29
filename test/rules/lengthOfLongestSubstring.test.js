import lengthOfLongestSubstring from '../../src/rules/lengthOfLongestSubstring';
import { inputData, expected } from '../data/lengthOfLongestSubstringData';
test('lengthOfLongestSubstring function should return correct sum result from cases data 1', () => {
  expect(lengthOfLongestSubstring(inputData.case1)).toEqual(expected.case1);
});

test('lengthOfLongestSubstring function should return correct sum result from cases data 2', () => {
  expect(lengthOfLongestSubstring(inputData.case2)).toEqual(expected.case2);
});

test('lengthOfLongestSubstring function should return correct sum result from cases data 3', () => {
  expect(lengthOfLongestSubstring(inputData.case3)).toEqual(expected.case3);
});
