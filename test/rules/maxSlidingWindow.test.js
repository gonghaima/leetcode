
import maxSlidingWindow from "../../src/rules/maxSlidingWindow";

import { inputData, expected } from "../data/maxSlidingWindowData";

test("maxSlidingWindow should return expected result for case1", () => {
  const { nums, k } = inputData.case1;
  const result = maxSlidingWindow(nums, k);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test("maxSlidingWindow should return expected result for case2", () => {
  const { nums, k } = inputData.case2;
  const result = maxSlidingWindow(nums, k);
  expect(result.sort()).toEqual(expected.case2.sort());
});

test("maxSlidingWindow should return expected result for case3", () => {
  const { nums, k } = inputData.case3;
  const result = maxSlidingWindow(nums, k);
  expect(result.sort()).toEqual(expected.case3.sort());
});

test("maxSlidingWindow should return expected result for case4", () => {
  const { nums, k } = inputData.case4;
  const result = maxSlidingWindow(nums, k);
  expect(result.sort()).toEqual(expected.case4.sort());
});

test("maxSlidingWindow should return expected result for case5", () => {
  const { nums, k } = inputData.case5;
  const result = maxSlidingWindow(nums, k);
  expect(result.sort()).toEqual(expected.case5.sort());
});

