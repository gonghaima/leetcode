import isMatch from "../../src/rules/isMatch";
import { inputData, expected } from "../data/isMatchData";

test("isMatch should return the distance for case1", () => {
  const { s, p } = inputData.case1;
  const result = isMatch(s, p);
  expect(result).toEqual(expected.case1);
});

test("isMatch should return the distance for case2", () => {
  const { s, p } = inputData.case2;
  const result = isMatch(s, p);
  expect(result).toEqual(expected.case2);
});

test("isMatch should return the distance for case3", () => {
  const { s, p } = inputData.case3;
  const result = isMatch(s, p);
  expect(result).toEqual(expected.case3);
});
