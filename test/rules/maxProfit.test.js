// import maxProfit from "../../src/rules/maxProfit";
// import maxProfit from "../../src/rules/maxProfit/dp";
// import maxProfit from "../../src/rules/maxProfit/kadane";
import maxProfit from "../../src/rules/maxProfit/kadane-1";
import { inputData, expected } from "../data/maxProfitData";

test("maxProfit should return max profit from a given list", () => {
  const result = maxProfit(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("maxProfit should return 0, when there is no transaction available", () => {
  const result = maxProfit(inputData.case2);
  expect(result).toBe(expected.case2);
});
