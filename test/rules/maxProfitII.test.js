import maxProfitII from "../../src/rules/maxProfitII";
import { inputData, expected } from "../mock/maxProfitIIData";

test("maxProfitII should return max profit from case1", () => {
  const result = maxProfitII(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("maxProfitII should return max profit from case2", () => {
  const result = maxProfitII(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("maxProfitII should return 0 from case3", () => {
  const result = maxProfitII(inputData.case3);
  expect(result).toBe(expected.case3);
});

test("maxProfitII should return 0 from case4", () => {
  const result = maxProfitII(inputData.case4);
  expect(result).toBe(expected.case4);
});
