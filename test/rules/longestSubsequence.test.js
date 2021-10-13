
import longestSubsequence from "../../src/rules/longestSubsequence/dp";
import { inputData, expected } from "../data/longestSubsequenceData";

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

// test("longestSubsequence should return expected result for case4", () => {
//   const { arr, difference } = inputData.case4;
//   const result = longestSubsequence(arr, difference);
//   expect(result).toEqual(expected.case4);
// });
