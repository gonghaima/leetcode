import maxSumAfterPartitioning from "../../src/rules/maxSumAfterPartitioning/dp";
import { inputData, expected } from "../mock/maxSumAfterPartitioningData";

test("maxSumAfterPartitioning should return max profit from case1", () => {
  const { arr, k } = inputData.case1;
  const result = maxSumAfterPartitioning(arr, k);
  expect(result).toEqual(expected.case1);
});

test("maxSumAfterPartitioning should return max profit from case2", () => {
  const { arr, k } = inputData.case2;
  const result = maxSumAfterPartitioning(arr, k);
  expect(result).toEqual(expected.case2);
});

test("maxSumAfterPartitioning should return max profit from case3", () => {
  const { arr, k } = inputData.case3;
  const result = maxSumAfterPartitioning(arr, k);
  expect(result).toEqual(expected.case3);
});