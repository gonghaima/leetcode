import singleNumber from "../../src/rules/singleNumber";
import { inputData, expected } from "../mock/singleNumberData";

test("singleNumber should check a number for case 1", () => {
  const result = singleNumber(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("singleNumber should check a number for case 2", () => {
  const result = singleNumber(inputData.case2);
  expect(result).toBe(expected.case2);
});
