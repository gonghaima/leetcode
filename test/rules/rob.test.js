import rob from "../../src/rules/rob";
import { inputData, expected } from "../mock/robData";

test("rob should return correct result for case1", () => {
  const result = rob(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("rob should return correct result for case2", () => {
  const result = rob(inputData.case2);
  expect(result).toEqual(expected.case2);
});