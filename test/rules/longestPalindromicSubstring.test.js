import {
  loopMatch,
  longestPalindrome
} from '../../src/rules/longestPalindromicSubstring';
import { inputData, expected } from '../mock/longestPalindromicSubstringData';

test('loopMatch function should decide if it is palindrom', () => {
  expect(loopMatch('cbc'.split(''))).toBe(true);
  expect(loopMatch('oppo'.split(''))).toBe(true);
  expect(loopMatch('cbbd'.split(''))).toBe(false);
  // expect(longestPalindromicSubstring(inputData.case2)).toBe(expected.case2);
});

test('longestPalindromicSubstring function should return longest palindrom', () => {
  expect(longestPalindrome(inputData.case1)).toBe(expected.case1);
  expect(longestPalindrome(inputData.case2)).toBe(expected.case2);
});
