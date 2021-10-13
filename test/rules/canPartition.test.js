import canPartition from "../../src/rules/canPartition/dp1";
import { inputData, expected } from "../data/canPartitionData";

test("canPartition should return correct result for case1", () => {
  const result = canPartition(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("canPartition should return correct result for case2", () => {
  const result = canPartition(inputData.case2);
  expect(result).toEqual(expected.case2);
});
