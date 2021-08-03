
import deleteAndEarn from "../../src/rules/deleteAndEarn";

import { inputData, expected } from "../mock/deleteAndEarnData";

test("deleteAndEarn should return expected result for case1", () => {
  const result = deleteAndEarn(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("deleteAndEarn should return expected result for case2", () => {
  const result = deleteAndEarn(inputData.case2);
  expect(result).toEqual(expected.case2);
});

// test("deleteAndEarn should return expected result for case3", () => {
//   const result = deleteAndEarn(inputData.case3);
//   expect(result).toEqual(expected.case3);
// });
