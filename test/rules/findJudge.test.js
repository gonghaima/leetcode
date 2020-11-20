import findJudgeSolutions from "../../src/rules/findJudge";
import testCases from "../mock/findJudgeData";

Object.entries(findJudgeSolutions).map(([solutionKey, solution]) => {
  Object.entries(testCases).map(([testKey, testCase]) => {
    test(`findJudge solution ${solutionKey} should return correct data for case ${testKey}`, () => {
      const result = solution(testCase.input.N, testCase.input.trust);
      expect(result).toBe(testCase.expected);
    });
  });
});