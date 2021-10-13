
import divisorGame from "../../src/rules/divisorGame/topdown";

import { inputData, expected } from "../data/divisorGameData";

test("divisorGame should return expected result for case1", () => {
  const result = divisorGame(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("divisorGame should return expected result for case2", () => {
  const result = divisorGame(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test("divisorGame should return expected result for case3", () => {
  const result = divisorGame(inputData.case3);
  expect(result).toEqual(expected.case3);
});
