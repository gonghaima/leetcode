import wiggleMaxLength, { isWiggle } from "../../src/rules/wiggleMaxLength/dp";
import {
  inputData,
  expected,
  wiggle_inputData,
  wiggle_expected,
  sub_comb_inputData,
  sub_comb_expected
} from "../mock/wiggleMaxLengthData";

// test("wiggle util should return true from a valid wiggle list", () => {
//   const result = isWiggle(wiggle_inputData.case1);
//   expect(result).toBe(wiggle_expected.case1);
// });

test("wiggleMaxLength should return max subsequences from a given list 1", () => {
  const result = wiggleMaxLength(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("wiggleMaxLength should return max subsequences from a given list 2", () => {
  const result = wiggleMaxLength(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("wiggleMaxLength should return max subsequences from a given list 3", () => {
  const result = wiggleMaxLength(inputData.case3);
  expect(result).toBe(expected.case3);
});
