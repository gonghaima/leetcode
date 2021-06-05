import maxProfitTransaction from "../../src/rules/maxProfitTransaction";
import { inputData, expected } from "../mock/maxProfitTransactionData";

test("maxProfitTransaction should return max profit from case1", () => {
  const { prices, fee } = inputData.case1;
  const result = maxProfitTransaction(prices, fee);
  expect(result).toBe(expected.case1);
});

test("maxProfitTransaction should return max profit from case2", () => {
  const { prices, fee } = inputData.case2;
  const result = maxProfitTransaction(prices, fee);
  expect(result).toBe(expected.case2);
});