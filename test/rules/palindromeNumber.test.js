import { isPalindrome } from '../../src/rules/palindromeNumber';
import { inputData, expected } from '../mock/palindromeNumberData';

test('palindromeNumber should check a number', () => {
  const result = isPalindrome(inputData.case1);
  expect(result).toBe(expected.case1);
});
