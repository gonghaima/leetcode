import wiggleSort2 from "../../src/rules/wiggleSort2";
import { inputData, expected } from "../data/wiggleSort2Data";

test("wiggleSort2 should return max subsequences from a given list 1", () => {
  const result = wiggleSort2(inputData.case1);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test("wiggleSort2 should return max subsequences from a given list 2", () => {
  const result = wiggleSort2(inputData.case2);
  expect(result.sort()).toEqual(expected.case2.sort());
});
