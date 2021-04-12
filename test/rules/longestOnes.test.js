
import longestOnes from "../../src/rules/longestOnes";
import { inputData, expected } from "../mock/longestOnesData";

test("longestOnes should return expected result for case1", () => {
  const result = longestOnes(inputData.nums, inputData.k);
  expect(result).toEqual(expected.case1);
});
test("longestOnes should return expected result for case2", () => {
  const result = longestOnes(inputData.case2);
  expect(result).toEqual(expected.case2);
});