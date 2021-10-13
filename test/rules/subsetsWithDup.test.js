
import subsetsWithDup from "../../src/rules/subsetsWithDup/backtrack-2";
import { inputData, expected } from "../data/subsetsWithDupData";

test("subsetsWithDup should return expected result for case1", () => {
  const result = subsetsWithDup(inputData.case1);
  expect(result.sort()).toEqual(expected.case1.sort());
});
// test("subsetsWithDup should return expected result for case2", () => {
//   const result = subsetsWithDup(inputData.case2);
//   expect(result).toEqual(expected.case2);
// });
// test("subsetsWithDup should return expected result for case3", () => {
//   const result = subsetsWithDup(inputData.case3);
//   expect(result.sort()).toEqual(expected.case3.sort());
// });
