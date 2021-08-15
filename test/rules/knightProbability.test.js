
import knightProbability from "../../src/rules/knightProbability";

import { inputData, expected } from "../mock/knightProbabilityData";

test("knightProbability should return expected result for case1", () => {
  const { n, k, row, column } = inputData.case1;
  const result = knightProbability(n, k, row, column);
  expect(result).toEqual(expected.case1);
});

test("knightProbability should retu`rn expected result for case2", () => {
  const { n, k, row, column } = inputData.case2;
  const result = knightProbability(n, k, row, column);
  expect(result).toEqual(expected.case2);
});

test("knightProbability should retu`rn expected result for case3", () => {
  const { n, k, row, column } = inputData.case3;
  const result = knightProbability(n, k, row, column);
  expect(result).toEqual(expected.case3);
});
