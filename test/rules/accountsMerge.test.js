import accountsMerge from "../../src/rules/accountsMerge";

import { inputData, expected } from "../mock/accountsMergeData";

test("accountsMerge should satisfy all the given equations for case 1", () => {
  const result = accountsMerge(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("accountsMerge should find the largest possible number of moves for case 2", () => {
  const result = accountsMerge(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test("accountsMerge should find the largest possible number of moves for case 3", () => {
  const result = accountsMerge(inputData.case3);
  expect(result).toEqual(expected.case3);
});

test("accountsMerge should find the largest possible number of moves for case 4", () => {
  const result = accountsMerge(inputData.case4);
  expect(result).toEqual(expected.case4);
});

test("accountsMerge should find the largest possible number of moves for case 5", () => {
  const result = accountsMerge(inputData.case5);
  expect(result).toEqual(expected.case5);
});

test("accountsMerge should find the largest possible number of moves for case 6", () => {
  const result = accountsMerge(inputData.case6);
  expect(result).toEqual(expected.case6);
});

test("accountsMerge should find the largest possible number of moves for case 7", () => {
  const result = accountsMerge(inputData.case7);
  expect(result).toEqual(expected.case7);
});

test("accountsMerge should find the largest possible number of moves for case 8", () => {
  const result = accountsMerge(inputData.case8);
  expect(result).toEqual(expected.case8);
});

test("accountsMerge should find the largest possible number of moves for case 9", () => {
  const result = accountsMerge(inputData.case9);
  expect(result).toEqual(expected.case9);
});

