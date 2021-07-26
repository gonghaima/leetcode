
import numDecodings2 from "../../src/rules/numDecodings2";

import { inputData, expected } from "../mock/numDecodings2Data";

test("numDecodings2 should return expected result for case1", () => {
  const result = numDecodings2(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("numDecodings2 should return expected result for case2", () => {
  const result = numDecodings2(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test("numDecodings2 should return expected result for case3", () => {
  const result = numDecodings2(inputData.case3);
  expect(result).toEqual(expected.case3);
});
