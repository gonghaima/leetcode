import removeDuplicatesFromSortedArray from "../../src/rules/removeDuplicatesFromSortedArray";
import {
  inputData,
  expected
} from "../mock/removeDuplicatesFromSortedArrayData";

test("removeDuplicatesFromSortedArray should return expected result 1", () => {
  expect(removeDuplicatesFromSortedArray(inputData.case1)).toBe(expected.case1);
});

test("removeDuplicatesFromSortedArray should return expected result 2", () => {
  expect(removeDuplicatesFromSortedArray(inputData.case2)).toBe(expected.case2);
});
