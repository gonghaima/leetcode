import countBits from "../../src/rules/countBits/twoPointers";
import { inputData, expected } from "../data/countBitsData";

test("countBits should return correct result for case1", () => {
  const result = countBits(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("countBits should return correct result for case2", () => {
  const result = countBits(inputData.case2);
  expect(result).toEqual(expected.case2);
});
