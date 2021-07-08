import countBits from "../../src/rules/countBits/dp";
import { inputData, expected } from "../mock/countBitsData";

test("countBits should return correct result for case1", () => {
  const result = countBits(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("countBits should return correct result for case2", () => {
  const result = countBits(inputData.case2);
  expect(result).toEqual(expected.case2);
});
