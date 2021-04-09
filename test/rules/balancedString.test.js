
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

test("balancedString should return expected result for case5", () => {
  const result = balancedString(inputData.case5);
  expect(result).toEqual(expected.case5);
});

test("balancedString should return expected result for case6", () => {
  const result = balancedString(inputData.case6);
  expect(result).toEqual(expected.case6);
});

test("balancedString should return expected result for case7", () => {
  const result = balancedString(inputData.case7);
  expect(result).toEqual(expected.case7);
});

test("balancedString should return expected result for case8", () => {
  const result = balancedString(inputData.case8);
  expect(result).toEqual(expected.case8);
});

