import maxProfit from "../../src/rules/maxProfit";
import { inputData, expected } from "../mock/maxProfitData";

test("maxProfit should check a number in case1", () => {
  const result = maxProfit(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("maxProfit should check a number in case2", () => {
  const result = maxProfit(inputData.case2);
  expect(result).toBe(expected.case2);
});
