import longestCommonPrefix from '../../src/rules/longestCommonPrefix';
import { inputData, expected } from '../data/longestCommonPrefix.Data';
test('longestCommonPrefix function should return longest prefix from an array of strings', () => {
  expect(longestCommonPrefix(inputData.case1)).toBe(expected.case1);
  expect(longestCommonPrefix(inputData.case2)).toBe(expected.case2);
  expect(longestCommonPrefix(inputData.case3)).toBe(expected.case3);
  expect(longestCommonPrefix(inputData.case4)).toBe(expected.case4);
  expect(longestCommonPrefix(inputData.case5)).toBe(expected.case5);
  expect(longestCommonPrefix(inputData.case6)).toBe(expected.case6);
});
