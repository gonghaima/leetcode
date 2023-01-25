import isMatch2 from "../../src/rules/isMatch2";
import { inputData, expected } from "../data/isMatch2Data";

test("isMatch2 should return the distance for case1", () => {
  const { s, p } = inputData.case1;
  const result = isMatch2(s, p);
  expect(result).toEqual(expected.case1);
});

test("isMatch2 should return the distance for case2", () => {
  const { s, p } = inputData.case2;
  const result = isMatch2(s, p);
  expect(result).toEqual(expected.case2);
});

test("isMatch2 should return the distance for case3", () => {
  const { s, p } = inputData.case3;
  const result = isMatch2(s, p);
  expect(result).toEqual(expected.case3);
});
