import singleNumber from "../../src/rules/singleNumber";
import solution1 from "../../src/rules/singleNumber/solution1";
import { inputData, expected } from "../mock/singleNumberData";

test("singleNumber should check a number for case 1", () => {
  const result = singleNumber(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("singleNumber should check a number for case 2", () => {
  const result = singleNumber(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("solution1 should check a number for case 1", () => {
  const result = solution1(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("solution1 should check a number for case 2", () => {
  const result = solution1(inputData.case2);
  expect(result).toBe(expected.case2);
});
