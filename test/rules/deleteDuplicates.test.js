import deleteDuplicates from "../../src/rules/deleteDuplicates";
import { inputData, expected } from "../mock/deleteDuplicatesData";
test("deleteDuplicates function should remove duplicates from cases data", () => {
  expect(deleteDuplicates(inputData.case1)).toEqual(expected.case1);
  expect(deleteDuplicates(inputData.case2)).toEqual(expected.case1);
});
