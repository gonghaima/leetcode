
import subsets from "../../src/rules/subsets/recursive";
import { inputData, expected } from "../mock/subsetsData";

test("subsets should return expected result for case1", () => {
  const result = subsets(inputData.case1);
  expect(result.sort()).toEqual(expected.case1.sort());
});
test("subsets should return expected result for case2", () => {
  const result = subsets(inputData.case2);
  expect(result).toEqual(expected.case2);
});
