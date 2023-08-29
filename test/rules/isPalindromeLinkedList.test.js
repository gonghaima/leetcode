import isPalindromeLinkedList from '../../src/rules/isPalindromeLinkedList';
import { inputData, expected } from '../data/isPalindromeLinkedListData';

test('isPalindromeLinkedList should return true, if given string is a valid palindrome', () => {
  const result = isPalindromeLinkedList(inputData.case1);
  expect(result).toBe(expected.case1);
});

test('isPalindromeLinkedList should return false, when given string is not a valid palindrome', () => {
  const result = isPalindromeLinkedList(inputData.case2);
  expect(result).toBe(expected.case2);
});
