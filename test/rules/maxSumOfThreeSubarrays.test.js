import maxSumOfThreeSubarrays from "../../src/rules/maxSumOfThreeSubarrays";
import { inputData, expected } from "../mock/maxSumOfThreeSubarraysData";

test("maxSumOfThreeSubarrays should return max profit from case1", () => {
  const { nums, k } = inputData.case1;
  const result = maxSumOfThreeSubarrays(nums, k);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test("maxSumOfThreeSubarrays should return max profit from case2", () => {
  const { nums, k } = inputData.case2;
  const result = maxSumOfThreeSubarrays(nums, k);
  expect(result.sort()).toEqual(expected.case2.sort());
});