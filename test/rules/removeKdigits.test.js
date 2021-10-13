import removeKdigits from "../../src/rules/removeKdigits";
import { inputData, expected } from "../data/removeKdigitsData";

test("removeKdigits should return minimium number in case1", () => {
  const result = removeKdigits(inputData.case1.num, inputData.case1.k);
  expect(result).toBe(expected.case1);
});
test("removeKdigits should return minimium number in case2", () => {
  const result = removeKdigits(inputData.case2.num, inputData.case2.k);
  expect(result).toBe(expected.case2);
});
test("removeKdigits should return minimium number in case3", () => {
  const result = removeKdigits(inputData.case3.num, inputData.case3.k);
  expect(result).toBe(expected.case3);
});
