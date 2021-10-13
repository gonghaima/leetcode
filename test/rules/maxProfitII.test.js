import maxProfitIII from "../../src/rules/maxProfitIII";
import { inputData, expected } from "../data/maxProfitIIData";

test("maxProfitIII should return max profit from case1", () => {
  const result = maxProfitIII(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("maxProfitIII should return max profit from case2", () => {
  const result = maxProfitIII(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("maxProfitIII should return 0 from case3", () => {
  const result = maxProfitIII(inputData.case3);
  expect(result).toBe(expected.case3);
});

test("maxProfitIII should return 0 from case4", () => {
  const result = maxProfitIII(inputData.case4);
  expect(result).toBe(expected.case4);
});
