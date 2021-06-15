import numSquares from "../../src/rules/numSquares/bfs";
import { inputData, expected } from "../mock/numSquaresData";

test("numSquares should return correct result for case1", () => {
  const result = numSquares(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("numSquares should return correct result for case2", () => {
  const result = numSquares(inputData.case2);
  expect(result).toEqual(expected.case2);
});