import checkRecord2 from "../../src/rules/checkRecord2/dp-topdown-O1space";
import { inputData, expected } from "../mock/checkRecord2Data";

test("checkRecord2 should return correct result for case1", () => {
  const result = checkRecord2(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("checkRecord2 should return correct result for case2", () => {
  const result = checkRecord2(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test("checkRecord2 should return correct result for case3", () => {
  const result = checkRecord2(inputData.case3);
  expect(result).toEqual(expected.case3);
});