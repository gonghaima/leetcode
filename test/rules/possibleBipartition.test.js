import possibleBipartition from "../../src/rules/possibleBipartition";
import { inputData, expected } from "../mock/possibleBipartitionData";

test("possibleBipartition should return the distance for case1", () => {
  const result = possibleBipartition(inputData.case1.N, inputData.case1.dislikes);
  expect(result).toBe(expected.case1);
});

test("possibleBipartition should return the distance for case2", () => {
  const result = possibleBipartition(inputData.case2.N, inputData.case2.dislikes);
  expect(result).toBe(expected.case2);
});

test("possibleBipartition should return the distance for case3", () => {
  const result = possibleBipartition(inputData.case3.N, inputData.case3.dislikes);
  expect(result).toBe(expected.case3);
});