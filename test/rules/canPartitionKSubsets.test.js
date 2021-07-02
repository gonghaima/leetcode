import canPartitionKSubsets from "../../src/rules/canPartitionKSubsets";
import { inputData, expected } from "../mock/canPartitionKSubsetsData";

test("canPartitionKSubsets should return correct result for case1", () => {
  const result = canPartitionKSubsets(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("canPartitionKSubsets should return correct result for case2", () => {
  const result = canPartitionKSubsets(inputData.case2);
  expect(result).toEqual(expected.case2);
});
