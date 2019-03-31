import lengthOfLastWord from "../../src/rules/lengthOfLastWord";
import { inputData, expected } from "../mock/lengthOfLastWordData";
test("lengthOfLastWord function should return correct sum result from cases data", () => {
  expect(lengthOfLastWord(inputData.case1)).toBe(expected.case1);
  expect(lengthOfLastWord(inputData.case2)).toBe(expected.case2);
  expect(lengthOfLastWord(inputData.case3)).toBe(expected.case3);
  expect(lengthOfLastWord(inputData.case4)).toBe(expected.case4);
});
