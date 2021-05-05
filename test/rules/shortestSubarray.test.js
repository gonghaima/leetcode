
// import shortestSubarray from "../../src/rules/shortestSubarray";
import shortestSubarray from "../../src/rules/shortestSubarray/index-v1";
import { inputData, expected } from "../mock/shortestSubarrayData";

test("shortestSubarray should return expected result for case1", () => {
  const result = shortestSubarray(inputData.case1.A, inputData.case1.K);
  expect(result).toEqual(expected.case1);
});
test("shortestSubarray should return expected result for case2", () => {
  const result = shortestSubarray(inputData.case2.A, inputData.case2.K);
  expect(result).toEqual(expected.case2);
});

test("shortestSubarray should return expected result for case3", () => {
  const result = shortestSubarray(inputData.case3.A, inputData.case3.K);
  expect(result).toEqual(expected.case3);
});

test("shortestSubarray should return expected result for case4", () => {
  const result = shortestSubarray(inputData.case4.A, inputData.case4.K);
  expect(result).toEqual(expected.case4);
});

test("shortestSubarray should return expected result for case5", () => {
  const result = shortestSubarray(inputData.case5.A, inputData.case5.K);
  expect(result).toEqual(expected.case5);
});

