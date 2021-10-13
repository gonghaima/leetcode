
import findLongestChain from "../../src/rules/findLongestChain/bfs";

import { inputData, expected } from "../data/findLongestChainData";

test("findLongestChain should return expected result for case1", () => {
  const result = findLongestChain(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("findLongestChain should return expected result for case2", () => {
  const result = findLongestChain(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test("findLongestChain should return expected result for case3", () => {
  const result = findLongestChain(inputData.case3);
  expect(result).toEqual(expected.case3);
});
