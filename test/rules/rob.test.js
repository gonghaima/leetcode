import rob from "../../src/rules/rob/rec";
import { inputData, expected } from "../data/robData";

test("rob should return correct result for case1", () => {
  const result = rob(inputData.case1);
  expect(result).toEqual(expected.case1);
});

// test("rob should return correct result for case2", () => {
//   const result = rob(inputData.case2);
//   expect(result).toEqual(expected.case2);
// });