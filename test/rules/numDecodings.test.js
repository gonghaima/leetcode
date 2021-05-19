
// import numDecodings from "../../src/rules/numDecodings";
import numDecodings from "../../src/rules/numDecodings/solution1";

import { inputData, expected } from "../mock/numDecodingsData";

test("numDecodings should return expected result for case1", () => {
  const result = numDecodings(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("numDecodings should return expected result for case2", () => {
  const result = numDecodings(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test("numDecodings should return expected result for case3", () => {
  const result = numDecodings(inputData.case3);
  expect(result).toEqual(expected.case3);
});

test("numDecodings should return expected result for case4", () => {
  const result = numDecodings(inputData.case4);
  expect(result).toEqual(expected.case4);
});


