import deleteDuplicates from "../../../src/rules/listNode/deleteDuplicates";
// import { inputData, expected } from "../../data/listNode/deleteDuplicatesData";
import { inputData, expected } from "../../data/deleteDuplicatesData";
test("deleteDuplicates function should remove duplicates from cases data", () => {
  expect(deleteDuplicates(inputData.case1)).toEqual(expected.case1);
  expect(deleteDuplicates(inputData.case2)).toEqual(expected.case2);
  expect(deleteDuplicates(inputData.case3)).toEqual(expected.case3);
  expect(deleteDuplicates(inputData.case4)).toEqual(expected.case4);
});
