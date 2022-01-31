import longestCommonSubsequence from '../../src/rules/longestCommonSubsequence';
import { inputData, expected } from '../data/longestCommonSubsequenceData';

test('longestCommonSubsequence should return max profit from case1', () => {
  const { text1, text2 } = inputData.case1;
  const result = longestCommonSubsequence(text1, text2);
  expect(result).toEqual(expected.case1);
});

test('longestCommonSubsequence should return max profit from case2', () => {
  const { text1, text2 } = inputData.case2;
  const result = longestCommonSubsequence(text1, text2);
  expect(result).toEqual(expected.case2);
});

test('longestCommonSubsequence should return max profit from case3', () => {
  const { text1, text2 } = inputData.case3;
  const result = longestCommonSubsequence(text1, text2);
  expect(result).toEqual(expected.case3);
});
