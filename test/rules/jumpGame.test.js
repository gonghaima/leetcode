import jump from "../../src/rules/jump/greedy2";
import { inputData, expected } from "../data/jumpData";

test("jump should return the distance for case1", () => {
  const result = jump(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("jump should return the distance for case2", () => {
  const result = jump(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("jump should return the distance for case3", () => {
  const result = jump(inputData.case3);
  expect(result).toBe(expected.case3);
});

test("jump should return the distance for case4", () => {
  const result = jump(inputData.case4);
  expect(result).toBe(expected.case4);
});