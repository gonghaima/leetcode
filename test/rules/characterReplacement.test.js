import characterReplacement from "../../src/rules/characterReplacement";
import { inputData, expected } from "../mock/characterReplacementData";

test("characterReplacement should return expected result for case1", () => {
  const { s, k } = inputData.case1;
  const result = characterReplacement(s, k);
  expect(result).toEqual(expected.case1);
});
test("characterReplacement should return expected result for case2", () => {
  const { s, k } = inputData.case2;
  const result = characterReplacement(s, k);
  expect(result).toEqual(expected.case2);
});