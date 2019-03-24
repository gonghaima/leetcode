import { isValid } from "../../src/rules/validParentheses";
import { inputData, expected } from "../mock/validParenthesesData";

test("the validParentheses function  will validate first case", () => {
  expect(isValid(inputData.case1)).toEqual(expected.case1);
  expect(isValid(inputData.case2)).toEqual(expected.case2);
  expect(isValid(inputData.case3)).toEqual(expected.case3);
  expect(isValid(inputData.case4)).toEqual(expected.case4);
  expect(isValid(inputData.case5)).toEqual(expected.case5);
  expect(isValid(inputData.case6)).toEqual(expected.case6);
});
