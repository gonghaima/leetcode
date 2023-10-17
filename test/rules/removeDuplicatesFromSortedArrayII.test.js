import removeDuplicatesFromSortedArrayII from "../../src/rules/removeDuplicatesFromSortedArrayII";
import {
  inputData,
  expected
} from "../data/removeDuplicatesFromSortedArrayIIData";

test("removeDuplicatesFromSortedArrayII should return expected result 1", () => {
  expect(removeDuplicatesFromSortedArrayII(inputData.case1)).toBe(expected.case1);
});

test("removeDuplicatesFromSortedArrayII should return expected result 2", () => {
  expect(removeDuplicatesFromSortedArrayII(inputData.case2)).toBe(expected.case2);
});
