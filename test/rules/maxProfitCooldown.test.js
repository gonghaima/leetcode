import maxProfitCooldown from "../../src/rules/maxProfitCooldown";
import { inputData, expected } from "../mock/maxProfitIVData";

test("maxProfitCooldown should return max profit from case1", () => {
  const result = maxProfitCooldown(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("maxProfitCooldown should return max profit from case2", () => {
  const result = maxProfitCooldown(inputData.case2);
  expect(result).toBe(expected.case2);
});