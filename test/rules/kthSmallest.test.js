
import kthSmallest from "../../src/rules/kthSmallest";

import { inputData, expected } from "../data/kthSmallestData";

test("kthSmallest should return expected result for case1", () => {
  const result = kthSmallest(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("kthSmallest should return expected result for case2", () => {
  const result = kthSmallest(inputData.case2);
  expect(result).toEqual(expected.case2);
});