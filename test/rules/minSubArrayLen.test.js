
// import minSubArrayLen from "../../src/rules/minSubArrayLen";
// import minSubArrayLen from "../../src/rules/minSubArrayLen/slidingwindow";
import minSubArrayLen from "../../src/rules/minSubArrayLen/slidingwindow-v1";

import { inputData, expected } from "../mock/minSubArrayLenData";

test("minSubArrayLen should return expected result for case1", () => {
  const { target, nums } = inputData.case1;
  const result = minSubArrayLen(target, nums);
  expect(result).toEqual(expected.case1);
});

test("minSubArrayLen should return expected result for case2", () => {
  const { target, nums } = inputData.case2;
  const result = minSubArrayLen(target, nums);
  expect(result).toEqual(expected.case2);
});

test("minSubArrayLen should return expected result for case3", () => {
  const { target, nums } = inputData.case3;
  const result = minSubArrayLen(target, nums);
  expect(result).toEqual(expected.case3);
});

