import maxSubarraySumCircular from "../../src/rules/maxSubarraySumCircular";
import { inputData, expected } from "../data/maxSubarraySumCircularData";

test("maxSubarraySumCircular should return correct result for case1", () => {
  const result = maxSubarraySumCircular(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("maxSubarraySumCircular should return correct result for case2", () => {
  const result = maxSubarraySumCircular(inputData.case2);
  expect(result).toEqual(expected.case2);
});
