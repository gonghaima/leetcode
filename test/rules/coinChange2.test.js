import coinChange2 from "../../src/rules/coinChange2/dp-bottom-up-space-improved";
import { inputData, expected } from "../mock/coinChange2Data";

test("coinChange2 should return correct result for case1", () => {
  const { amount, coins } = inputData.case1;
  const result = coinChange2(amount, coins);
  expect(result).toEqual(expected.case1);
});

test("coinChange2 should return correct result for case2", () => {
  const { amount, coins } = inputData.case2;
  const result = coinChange2(amount, coins);
  expect(result).toEqual(expected.case2);
});

test("coinChange2 should return correct result for case3", () => {
  const { amount, coins } = inputData.case3;
  const result = coinChange2(amount, coins);
  expect(result).toEqual(expected.case3);
});

