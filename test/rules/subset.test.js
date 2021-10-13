
import subsets from "../../src/rules/subsets/iterative-oneline";
import { inputData, expected } from "../data/subsetsData";

test("subsets should return expected result for case1", () => {
  const result = subsets(inputData.case1);
  expect(result.sort()).toEqual(expected.case1.sort());
});
test("subsets should return expected result for case2", () => {
  const result = subsets(inputData.case2);
  expect(result).toEqual(expected.case2);
});
