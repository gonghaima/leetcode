
import longestSubsequence from "../../src/rules/longestSubsequence";
import { inputData, expected } from "../mock/longestSubsequenceData";

test("longestSubsequence should return expected result for case1", () => {
  const { arr, difference } = inputData.case1;
  const result = longestSubsequence(arr, difference);
  expect(result).toEqual(expected.case1);
});
test("longestSubsequence should return expected result for case2", () => {
  const { arr, difference } = inputData.case2;
  const result = longestSubsequence(arr, difference);
  expect(result).toEqual(expected.case2);
});

test("longestSubsequence should return expected result for case3", () => {
  const { arr, difference } = inputData.case3;
  const result = longestSubsequence(arr, difference);
  expect(result).toEqual(expected.case3);
});