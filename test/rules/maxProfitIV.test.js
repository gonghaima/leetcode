// import maxProfitIV from "../../src/rules/maxProfitIV";
import maxProfitIV from "../../src/rules/maxProfitIV/dp";
import { inputData, expected } from "../mock/maxProfitIVData";

// test("maxProfitIV should return max profit from case1", () => {
//   const { k, prices } = inputData.case1;
//   const result = maxProfitIV(k, prices);
//   expect(result).toBe(expected.case1);
// });

test("maxProfitIV should return max profit from case2", () => {
  const { k, prices } = inputData.case2;
  const result = maxProfitIV(k, prices);
  expect(result).toBe(expected.case2);
});