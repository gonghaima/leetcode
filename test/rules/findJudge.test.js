import findJudge from "../../src/rules/findJudge";
import { inputData, expected } from "../mock/findJudgeData";

test("findJudge should return correct data for case1", () => {
  const result = findJudge(inputData.case1.N, inputData.case1.trust);
  expect(result).toBe(expected.case1);
});


test("findJudge should return correct data for case2", () => {
  const result = findJudge(inputData.case2.N, inputData.case2.trust);
  expect(result).toBe(expected.case2);
});


test("findJudge should return correct data for case3", () => {
  const result = findJudge(inputData.case3.N, inputData.case3.trust);
  expect(result).toBe(expected.case3);
});

test("findJudge should return correct data for case4", () => {
  const result = findJudge(inputData.case4.N, inputData.case4.trust);
  expect(result).toBe(expected.case4);
});

test("findJudge should return correct data for case5", () => {
  const result = findJudge(inputData.case5.N, inputData.case5.trust);
  expect(result).toBe(expected.case5);
});