// import orangesRotting from "../../src/rules/orangesRotting/bfs";
import orangesRotting from "../../src/rules/orangesRotting/dfs";
import { inputData, expected } from "../mock/orangesRottingData";

test("orangesRotting should return the distance for case1", () => {
  const result = orangesRotting(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("orangesRotting should return the distance for case2", () => {
  const result = orangesRotting(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("orangesRotting should return the distance for case3", () => {
  const result = orangesRotting(inputData.case3);
  expect(result).toBe(expected.case3);
});

test("orangesRotting should return the distance for case4", () => {
  const result = orangesRotting(inputData.case4);
  expect(result).toBe(expected.case4);
});

test("orangesRotting should return the distance for case5", () => {
  const result = orangesRotting(inputData.case5);
  expect(result).toBe(expected.case5);
});


