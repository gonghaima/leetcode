// import maxProfitCooldown from "../../src/rules/maxProfitCooldown";
// import maxProfitCooldown from "../../src/rules/maxProfitCooldown/rec-memo";
import maxProfitCooldown from "../../src/rules/maxProfitCooldown/stateMachine";
import { inputData, expected } from "../data/maxProfitCooldownData";

test("maxProfitCooldown should return max profit from case1", () => {
  const result = maxProfitCooldown(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("maxProfitCooldown should return max profit from case2", () => {
  const result = maxProfitCooldown(inputData.case2);
  expect(result).toBe(expected.case2);
});