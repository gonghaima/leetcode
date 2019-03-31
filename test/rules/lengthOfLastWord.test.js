import lengthOfLastWord from "../../src/rules/lengthOfLastWord";
import { inputData, expected } from "../mock/lengthOfLastWordData";
test("lengthOfLastWord function should return correct sum result from case1 data", () => {
  expect(lengthOfLastWord(inputData.case1)).toBe(expected.case1);
});
