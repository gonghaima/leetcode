import integerBreak from "../../src/rules/integerBreak";
import { inputData, expected } from "../mock/integerBreakData";

test("integerBreak should return correct result for case1", () => {
  const result = integerBreak(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("integerBreak should return correct result for case2", () => {
  const result = integerBreak(inputData.case2);
  expect(result).toEqual(expected.case2);
});