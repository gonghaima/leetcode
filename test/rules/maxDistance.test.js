import maxDistance from "../../src/rules/maxDistance";
import s1 from "../../src/rules/maxDistance/solution1";
import s2 from "../../src/rules/maxDistance/solution2";
import { inputData, expected } from "../mock/maxDistanceData";

// test("maxDistance should return the distance for case1", () => {
//   const result = maxDistance(inputData.case1);
//   expect(result).toBe(expected.case1);
// });

// test("maxDistance should return the distance for case2", () => {
//   const result = maxDistance(inputData.case2);
//   expect(result).toBe(expected.case2);
// });

test("s1 should return the distance for case1", () => {
  const result = s1(inputData.case1);
  expect(result).toBe(expected.case1);
});

// test("s1 should return the distance for case2", () => {
//   const result = s1(inputData.case2);
//   expect(result).toBe(expected.case2);
// });

// test("s2 should return the distance for case1", () => {
//   const result = s2(inputData.case1);
//   expect(result).toBe(expected.case1);
// });

// test("s2 should return the distance for case2", () => {
//   const result = s2(inputData.case2);
//   expect(result).toBe(expected.case2);
// });