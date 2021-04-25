import equalSubstring from "../../src/rules/equalSubstring";
// import equalSubstring from "../../src/rules/equalSubstring/mine";
import { inputData, expected } from "../mock/equalSubstringData";

test("equalSubstring should return expected result for case1", () => {
  const { s, t, maxCost } = inputData.case1;
  const result = equalSubstring(s, t, maxCost);
  expect(result).toEqual(expected.case1);
});
test("equalSubstring should return expected result for case2", () => {
  const { s, t, maxCost } = inputData.case2;
  const result = equalSubstring(s, t, maxCost);
  expect(result).toEqual(expected.case2);
});
test("equalSubstring should return expected result for case3", () => {
  const { s, t, maxCost } = inputData.case3;
  const result = equalSubstring(s, t, maxCost);
  expect(result).toEqual(expected.case3);
});
test("equalSubstring should return expected result for case4", () => {
  const { s, t, maxCost } = inputData.case4;
  const result = equalSubstring(s, t, maxCost);
  expect(result).toEqual(expected.case4);
});