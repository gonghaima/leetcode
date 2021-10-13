import mergeSortedArray from "../../src/rules/mergeSortedArray";
import { inputData, expected } from "../data/mergeSortedArrayData";
test("mergeSortedArray function should increase one from last item from cases data", () => {
  const { nums1, m, nums2, n } = inputData.case1;
  expect(mergeSortedArray(nums1, m, nums2, n)).toEqual(expected.case1);
});
