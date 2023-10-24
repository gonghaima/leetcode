import hIndex from "../../src/rules/hIndex";
import { inputData, expected } from "../data/hIndexData";

test("hIndex should return a grouped Ids in case1", () => {
  const result = hIndex(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("hIndex should return a grouped Ids in case2", () => {
  const result = hIndex(inputData.case2);
  expect(result).toEqual(expected.case2);
});
