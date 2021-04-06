
import balancedString from "../../src/rules/balancedString";
import { inputData, expected } from "../mock/balancedStringData";

test("balancedString should return expected result for case1", () => {
  const result = balancedString(inputData.case1);
  expect(result).toEqual(expected.case1);
});
test("balancedString should return expected result for case2", () => {
  const result = balancedString(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test("balancedString should return expected result for case3", () => {
  const result = balancedString(inputData.case3);
  expect(result).toEqual(expected.case3);
});

test("balancedString should return expected result for case4", () => {
  const result = balancedString(inputData.case4);
  expect(result).toEqual(expected.case4);
});
