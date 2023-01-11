

import findWords from "../../src/rules/findWords";
import { inputData, expected } from "../data/findWordsData";

test("findWords should return expected result for case1", () => {
  const result = findWords(inputData.case1.board, inputData.case1.words);
  expect(result).toEqual(expected.case1);
});
test("findWords should return expected result for case2", () => {
  const result = findWords(inputData.case2.board, inputData.case2.words);
  expect(result).toEqual(expected.case2);
});