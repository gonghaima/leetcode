import isPalindrome from '../../src/rules/isPalindrome';
import { inputData, expected } from '../data/isPalindromeData';

test('isPalindrome should return true, if given string is a valid palindrome', () => {
  const result = isPalindrome(inputData.case1);
  expect(result).toBe(expected.case1);
});

test('isPalindrome should return false, when given string is not a valid palindrome', () => {
  const result = isPalindrome(inputData.case2);
  expect(result).toBe(expected.case2);
});
