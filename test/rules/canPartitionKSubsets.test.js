import canPartitionKSubsets from "../../src/rules/canPartitionKSubsets";
import { inputData, expected } from "../mock/canPartitionKSubsetsData";

test("canPartitionKSubsets should return correct result for case1", () => {
  const {nums, k} = inputData.case1;
  const result = canPartitionKSubsets(nums, k);
  expect(result).toEqual(expected.case1);
});

test("canPartitionKSubsets should return correct result for case2", () => {
  const {nums, k} = inputData.case2;
  const result = canPartitionKSubsets(nums, k);
  expect(result).toEqual(expected.case2);
});
