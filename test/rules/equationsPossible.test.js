// import equationsPossible from "../../src/rules/equationsPossible";
import equationsPossible from "../../src/rules/equationsPossible/unionFind";

import { inputData, expected } from "../data/equationsPossibleData";

test("equationsPossible should satisfy all the given equations for case 1", () => {
  const result = equationsPossible(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("equationsPossible should find the largest possible number of moves for case 2", () => {
  const result = equationsPossible(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test("equationsPossible should find the largest possible number of moves for case 3", () => {
  const result = equationsPossible(inputData.case3);
  expect(result).toEqual(expected.case3);
});

test("equationsPossible should find the largest possible number of moves for case 4", () => {
  const result = equationsPossible(inputData.case4);
  expect(result).toEqual(expected.case4);
});

test("equationsPossible should find the largest possible number of moves for case 5", () => {
  const result = equationsPossible(inputData.case5);
  expect(result).toEqual(expected.case5);
});

test("equationsPossible should find the largest possible number of moves for case 6", () => {
  const result = equationsPossible(inputData.case6);
  expect(result).toEqual(expected.case6);
});

test("equationsPossible should find the largest possible number of moves for case 7", () => {
  const result = equationsPossible(inputData.case7);
  expect(result).toEqual(expected.case7);
});

test("equationsPossible should find the largest possible number of moves for case 8", () => {
  const result = equationsPossible(inputData.case8);
  expect(result).toEqual(expected.case8);
});

test("equationsPossible should find the largest possible number of moves for case 9", () => {
  const result = equationsPossible(inputData.case9);
  expect(result).toEqual(expected.case9);
});

