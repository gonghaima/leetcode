
import subarraysWithKDistinct from "../../src/rules/subarraysWithKDistinct";
import { inputData, expected } from "../data/subarraysWithKDistinctData";

test("subarraysWithKDistinct should return expected result for case1", () => {
  const result = subarraysWithKDistinct(inputData.case1.A, inputData.case1.K);
  expect(result).toEqual(expected.case1);
});
test("subarraysWithKDistinct should return expected result for case2", () => {
  const result = subarraysWithKDistinct(inputData.case2.A, inputData.case2.K);
  expect(result).toEqual(expected.case2);
});
