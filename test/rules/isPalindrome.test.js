import isPalindrome from "../../src/rules/isPalindrome";
import { inputData, expected } from "../data/isPalindromeData";

test("isPalindrome should return true, if given string is a valid palindrome", () => {
  const result = isPalindrome(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("isPalindrome should return false, when given string is not a valid palindrome", () => {
  const result = isPalindrome(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("isPalindrome should return true, when empty string input", () => {
  const result = isPalindrome(inputData.case3);
  expect(result).toBe(expected.case3);
});

test("isPalindrome should return true, when empty string input", () => {
  const result = isPalindrome(inputData.case3);
  expect(result).toBe(expected.case3);
});

test("isPalindrome should return true, when space string input", () => {
  const result = isPalindrome(inputData.case4);
  expect(result).toBe(expected.case4);
});

test("isPalindrome should return true, when only special characters", () => {
  const result = isPalindrome(inputData.case5);
  expect(result).toBe(expected.case5);
});

test("isPalindrome should return false", () => {
  const result = isPalindrome(inputData.case6);
  expect(result).toBe(expected.case6);
});
