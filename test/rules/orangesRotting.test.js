import orangesRotting from "../../src/rules/orangesRotting";
import { inputData, expected } from "../mock/maxDistanceData";

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
  expect(result).toBe(expected.case2);
});

