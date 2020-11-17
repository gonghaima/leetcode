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
