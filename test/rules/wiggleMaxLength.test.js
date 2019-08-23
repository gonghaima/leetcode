import wiggleMaxLength from "../../src/rules/wiggleMaxLength";
import { inputData, expected } from "../mock/wiggleMaxLengthData";

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
