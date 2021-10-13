import numberOfArithmeticSlices from "../../src/rules/numberOfArithmeticSlices";
import { inputData, expected } from "../data/numberOfArithmeticSlicesData";

test("case1 - numberOfArithmeticSlices should return the number of arithmetic slices from a given list", () => {
  const result = numberOfArithmeticSlices(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("case2 - numberOfArithmeticSlices should return the number of arithmetic slices from a given list", () => {
  const result = numberOfArithmeticSlices(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("case3 - numberOfArithmeticSlices should return the number of arithmetic slices from a given list", () => {
  const result = numberOfArithmeticSlices(inputData.case3);
  expect(result).toBe(expected.case3);
});

test("case4 - numberOfArithmeticSlices should return the number of arithmetic slices from a given list", () => {
  const result = numberOfArithmeticSlices(inputData.case4);
  expect(result).toBe(expected.case4);
});
