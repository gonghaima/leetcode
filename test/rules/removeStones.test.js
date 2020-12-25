import removeStones from "../../src/rules/removeStones";
import { inputData, expected } from "../mock/removeStonesData";

test("removeStones should find the largest possible number of moves for case 1", () => {
  const result = removeStones(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("removeStones should find the largest possible number of moves for case 2", () => {
  const result = removeStones(inputData.case2);
  expect(result).toBe(expected.case2);
});


test("removeStones should find the largest possible number of moves for case 3", () => {
  const result = removeStones(inputData.case3);
  expect(result).toBe(expected.case3);
});

test("removeStones should find the largest possible number of moves for case 4", () => {
  const result = removeStones(inputData.case4);
  expect(result).toBe(expected.case4);
});


