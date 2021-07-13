import checkRecord from "../../src/rules/checkRecord";
import { inputData, expected } from "../mock/checkRecordData";

test("checkRecord should return correct result for case1", () => {
  const result = checkRecord(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("checkRecord should return correct result for case2", () => {
  const result = checkRecord(inputData.case2);
  expect(result).toEqual(expected.case2);
});
