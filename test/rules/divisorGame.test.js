
import divisorGame from "../../src/rules/divisorGame";

import { inputData, expected } from "../mock/divisorGameData";

test("divisorGame should return expected result for case1", () => {
  const result = divisorGame(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("divisorGame should return expected result for case2", () => {
  const result = divisorGame(inputData.case2);
  expect(result).toEqual(expected.case2);
});
