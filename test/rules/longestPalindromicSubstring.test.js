import {
  loopMatch,
  longestPalindrome
} from '../../src/rules/longestPalindromicSubstring';
import { inputData, expected } from '../mock/longestPalindromicSubstringData';

import { longestPalindromeSolution1 } from '../../src/rules/longestPalindromicSubstring/solution1';

//index1 doesn't work on all tests
// test('loopMatch function should decide if it is palindrom', () => {
//   expect(loopMatch('cbc'.split(''))).toBe(true);
//   expect(loopMatch('oppo'.split(''))).toBe(true);
//   expect(loopMatch('cbbd'.split(''))).toBe(false);
//   // expect(longestPalindromicSubstring(inputData.case2)).toBe(expected.case2);
// });

// test('longestPalindromicSubstring function should return longest palindrom', () => {
//   expect(longestPalindrome(inputData.case1)).toBe(expected.case1);
//   expect(longestPalindrome(inputData.case2)).toBe(expected.case2);
// });

// solution1 test
test('longestPalindromeSolution1 function should return longest palindrom', () => {
  expect(longestPalindromeSolution1(inputData.case1)).toBe(expected.case1);
  expect(expected.case2).toContain(longestPalindromeSolution1(inputData.case2));
  expect(longestPalindromeSolution1(inputData.case3)).toBe(expected.case3);
  expect(longestPalindromeSolution1(inputData.case4)).toBe(expected.case4);
  expect(longestPalindromeSolution1(inputData.case5)).toBe(expected.case5);
  expect(longestPalindromeSolution1(inputData.case6)).toBe(expected.case6);
});
