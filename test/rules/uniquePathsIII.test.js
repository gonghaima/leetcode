import uniquePathsIII from "../../src/rules/uniquePathsIII";
import { inputData, expected } from "../data/uniquePathsIIIData";

test("uniquePathsIII should return correct path number for case 1", () => {
  const result = uniquePathsIII(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("uniquePathsIII should return correct path number for case 2", () => {
  const result = uniquePathsIII(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("uniquePathsIII should return correct path number for case 3", () => {
  const result = uniquePathsIII(inputData.case3);
  expect(result).toBe(expected.case3);
});
