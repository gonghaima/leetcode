import jump from "../../src/rules/jumpIII/bfs";
import { inputData, expected } from "../data/jumpIIIData";

test("jump should return the distance for case1", () => {
  const { arr, start } = inputData.case1;
  const result = jump(arr, start);
  expect(result).toBe(expected.case1);
});

test("jump should return the distance for case2", () => {
  const { arr, start } = inputData.case2;
  const result = jump(arr, start);
  expect(result).toBe(expected.case2);
});

test("jump should return the distance for case3", () => {
  const { arr, start } = inputData.case3;
  const result = jump(arr, start);
  expect(result).toBe(expected.case3);
});