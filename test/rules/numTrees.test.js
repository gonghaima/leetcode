
// import numTrees from "../../src/rules/numTrees";
import numTrees from "../../src/rules/numTrees/dp-memo";

import { inputData, expected } from "../mock/minWindowData";

test("numTrees should return expected result for case1", () => {
  const result = numTrees(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("numTrees should return expected result for case2", () => {
  const result = numTrees(inputData.case2);
  expect(result).toEqual(expected.case2);
});
