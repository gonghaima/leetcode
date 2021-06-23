import countNumbersWithUniqueDigits from "../../src/rules/countNumbersWithUniqueDigits/dp";
import { inputData, expected } from "../mock/countNumbersWithUniqueDigitsData";

test("countNumbersWithUniqueDigits should return correct result for case1", () => {
  const result = countNumbersWithUniqueDigits(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("countNumbersWithUniqueDigits should return correct result for case2", () => {
  const result = countNumbersWithUniqueDigits(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test("countNumbersWithUniqueDigits should return correct result for case3", () => {
  const result = countNumbersWithUniqueDigits(inputData.case3);
  expect(result).toEqual(expected.case3);
});