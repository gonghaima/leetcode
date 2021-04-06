
// import numberOfSubstrings from "../../src/rules/numberOfSubstrings";
// import numberOfSubstrings from "../../src/rules/numberOfSubstrings/slidingWindow-mine";
// import numberOfSubstrings from "../../src/rules/numberOfSubstrings/index-v1";
import numberOfSubstrings from "../../src/rules/numberOfSubstrings/threePointers";
import { inputData, expected } from "../mock/numberOfSubstringsData";

test("numberOfSubstrings should return expected result for case1", () => {
  const result = numberOfSubstrings(inputData.case1);
  expect(result).toEqual(expected.case1);
});
test("numberOfSubstrings should return expected result for case2", () => {
  const result = numberOfSubstrings(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test("numberOfSubstrings should return expected result for case3", () => {
  const result = numberOfSubstrings(inputData.case3);
  expect(result).toEqual(expected.case3);
});

test("numberOfSubstrings should return expected result for case4", () => {
  const result = numberOfSubstrings(inputData.case4);
  expect(result).toEqual(expected.case4);
});
