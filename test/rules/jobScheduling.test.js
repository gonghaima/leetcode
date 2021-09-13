
import jobScheduling from "../../src/rules/jobScheduling";

import { inputData, expected } from "../mock/jobSchedulingData";

test("jobScheduling should return expected result for case1", () => {
  const { startTime, endTime, profit } = inputData.case1;
  const result = jobScheduling(startTime, endTime, profit);
  expect(result).toEqual(expected.case1);
});

test("jobScheduling should return expected result for case2", () => {
  const { startTime, endTime, profit } = inputData.case2;
  const result = jobScheduling(startTime, endTime, profit);
  expect(result).toEqual(expected.case2);
});

test("jobScheduling should return expected result for case3", () => {
  const { startTime, endTime, profit } = inputData.case3;
  const result = jobScheduling(startTime, endTime, profit);
  expect(result).toEqual(expected.case3);
});
