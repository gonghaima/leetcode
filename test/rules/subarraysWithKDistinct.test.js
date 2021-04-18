
import subarraysWithKDistinct from "../../src/rules/subarraysWithKDistinct";
import { inputData, expected } from "../mock/subarraysWithKDistinctData";

test("subarraysWithKDistinct should return expected result for case1", () => {
  const result = subarraysWithKDistinct(inputData.case1.nums, inputData.case1.k);
  expect(result).toEqual(expected.case1);
});
test("subarraysWithKDistinct should return expected result for case2", () => {
  const result = subarraysWithKDistinct(inputData.case2.nums, inputData.case2.k);
  expect(result).toEqual(expected.case2);
});

test("subarraysWithKDistinct should return expected result for case3", () => {
  const result = subarraysWithKDistinct(inputData.case3.nums, inputData.case3.k);
  expect(result).toEqual(expected.case3);
});
