
import longestOnes from "../../src/rules/longestOnes";
import { inputData, expected } from "../mock/longestOnesData";

test("longestOnes should return expected result for case1", () => {
  const result = longestOnes(inputData.case1.nums, inputData.case1.k);
  expect(result).toEqual(expected.case1);
});
test("longestOnes should return expected result for case2", () => {
  const result = longestOnes(inputData.case2.nums, inputData.case2.k);
  expect(result).toEqual(expected.case2);
});