
// import longestSubarray from "../../src/rules/longestSubarray";
// import longestSubarray from "../../src/rules/longestSubarray/slidingWindow-mine";
import longestSubarray from "../../src/rules/longestSubarray/slidingWindow";
import { inputData, expected } from "../data/longestSubarrayData";

test("longestSubarray should return expected result for case1", () => {
  const result = longestSubarray(inputData.case1.nums, inputData.case1.limit);
  expect(result).toEqual(expected.case1);
});
test("longestSubarray should return expected result for case2", () => {
  const result = longestSubarray(inputData.case2.nums, inputData.case2.limit);
  expect(result).toEqual(expected.case2);
});

test("longestSubarray should return expected result for case3", () => {
  const result = longestSubarray(inputData.case3.nums, inputData.case3.limit);
  expect(result).toEqual(expected.case3);
});
