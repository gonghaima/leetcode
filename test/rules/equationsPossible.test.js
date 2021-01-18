import equationsPossible from "../../src/rules/equationsPossible";

import { inputData, expected } from "../mock/equationsPossibleData";

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
