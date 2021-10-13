// import maximumSubarray from "../../src/rules/maximumSubarray";
import maximumSubarray from "../../src/rules/maximumSubarray/kadane";
import { inputData, expected } from "../data/maximumSubarrayData";
test("maximumSubarray function should return correct sum result from case1 data", () => {
  expect(maximumSubarray(inputData.case1)).toBe(expected.case1);
  expect(maximumSubarray(inputData.case2)).toBe(expected.case2);
});
