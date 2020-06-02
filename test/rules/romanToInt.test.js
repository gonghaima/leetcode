import romanToInt from "../../src/rules/romanToInt";
import { inputData, expected } from "../mock/romanToIntData";

test("romanToInt should return correct value from case one", () => {
  const result = romanToInt(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("romanToInt should return correct value from other cases", () => {
  expect(romanToInt(inputData.case2)).toBe(expected.case2);
  expect(romanToInt(inputData.case3)).toBe(expected.case3);
  expect(romanToInt(inputData.case4)).toBe(expected.case4);
  expect(romanToInt(inputData.case5)).toBe(expected.case5);
});
