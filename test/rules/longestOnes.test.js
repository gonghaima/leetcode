
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

test("longestOnes should return expected result for case3", () => {
  const result = longestOnes(inputData.case3.nums, inputData.case3.k);
  expect(result).toEqual(expected.case3);
});

test("longestOnes should return expected result for case4", () => {
  const result = longestOnes(inputData.case4.nums, inputData.case4.k);
  expect(result).toEqual(expected.case4);
});

test("longestOnes should return expected result for case5", () => {
  const result = longestOnes(inputData.case5.nums, inputData.case5.k);
  expect(result).toEqual(expected.case5);
});

test("longestOnes should return expected result for case6", () => {
  const result = longestOnes(inputData.case6.nums, inputData.case6.k);
  expect(result).toEqual(expected.case6);
});