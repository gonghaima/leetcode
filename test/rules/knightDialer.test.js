
import knightDialer from "../../src/rules/knightDialer";

import { inputData, expected } from "../mock/numTilingsData";

test("knightDialer should return expected result for case1", () => {
  const result = knightDialer(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("knightDialer should return expected result for case2", () => {
  const result = knightDialer(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test("knightDialer should return expected result for case3", () => {
  const result = knightDialer(inputData.case3);
  expect(result).toEqual(expected.case3);
});


test("knightDialer should return expected result for case4", () => {
  const result = knightDialer(inputData.case4);
  expect(result).toEqual(expected.case4);
});