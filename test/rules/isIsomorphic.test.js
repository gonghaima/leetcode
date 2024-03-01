import isIsomorphic from "../../src/rules/isIsomorphic";
import { inputData, expected } from "../data/isIsomorphicData";

test("isIsomorphic should return the distance for case1", () => {
  const { s, p } = inputData.case1;
  const result = isIsomorphic(s, p);
  expect(result).toEqual(expected.case1);
});

test("isIsomorphic should return the distance for case2", () => {
  const { s, p } = inputData.case2;
  const result = isIsomorphic(s, p);
  expect(result).toEqual(expected.case2);
});

test("isIsomorphic should return the distance for case3", () => {
  const { s, p } = inputData.case3;
  const result = isIsomorphic(s, p);
  expect(result).toEqual(expected.case3);
});
