
// import numTrees from "../../src/rules/numTrees";
import numTrees from "../../src/rules/numTrees/dp-2";

import { inputData, expected } from "../data/numTreesData";

test("numTrees should return expected result for case1", () => {
  const result = numTrees(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("numTrees should return expected result for case2", () => {
  const result = numTrees(inputData.case2);
  expect(result).toEqual(expected.case2);
});
