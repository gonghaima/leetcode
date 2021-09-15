import maxSumDivThree from "../../src/rules/maxSumDivThree";
import { inputData, expected } from "../mock/maxSumDivThreeData";

test("maxSumDivThree should return the distance for case1", () => {
  const result = maxSumDivThree(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("maxSumDivThree should return the distance for case2", () => {
  const result = maxSumDivThree(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("maxSumDivThree should return the distance for case3", () => {
  const result = maxSumDivThree(inputData.case3);
  expect(result).toBe(expected.case3);
});