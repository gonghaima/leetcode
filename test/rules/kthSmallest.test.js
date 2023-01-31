import kthSmallest from "../../src/rules/kthSmallest";

import { inputData, expected } from "../data/kthSmallestData";

test("kthSmallest should return expected result for case1", () => {
  const { matrix, k } = inputData.case1;
  const result = kthSmallest(matrix, k);
  expect(result).toEqual(expected.case1);
});

test("kthSmallest should return expected result for case2", () => {
  const { matrix, k } = inputData.case2;
  const result = kthSmallest(matrix, k);
  expect(result).toEqual(expected.case2);
});
