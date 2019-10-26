import uniqueOccurrences from "../../src/rules/uniqueOccurrences";
import { inputData, expected } from "../mock/uniqueOccurrencesData";

test("uniqueOccurrences should return true from case 1", () => {
  const result = uniqueOccurrences(inputData.case1);
  expect(result).toBe(expected.case1);
});

// test("uniqueOccurrences should return false from case 2", () => {
//   const result = uniqueOccurrences(inputData.case2);
//   expect(result).toBe(expected.case2);
// });
