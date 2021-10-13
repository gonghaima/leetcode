import largestSubmatrix from "../../src/rules/largestSubmatrix";

import { inputData, expected } from "../data/largestSubmatrixData";

test("largestSubmatrix should return the number of isolated island - case 1", () => {
  const result = largestSubmatrix(inputData.case1);
  expect(result).toBe(expected.case1);
});

// test("largestSubmatrix should return the number of isolated island - case 2", () => {
//   const result = largestSubmatrix(inputData.case2);
//   expect(result).toBe(expected.case2);
// });

// test("largestSubmatrix should return the number of isolated island - case 3", () => {
//   const result = largestSubmatrix(inputData.case3);
//   expect(result).toBe(expected.case3);
// });
