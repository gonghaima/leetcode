
import subsets from "../../src/rules/subsets";
import { inputData, expected } from "../mock/subsetsData";

test("subsets should return expected result for case1", () => {
  const result = subsets(inputData.case1);
  expect(result).toEqual(expected.case1);
});
test("subsets should return expected result for case2", () => {
  const result = subsets(inputData.case2);
  expect(result).toEqual(expected.case2);
});
