import maxDistance from "../../src/rules/maxDistance";
import { inputData, expected } from "../mock/maxDistanceData";

test("maxDistance should return the distance for case1", () => {
  const result = maxDistance(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("maxDistance should return the distance for case2", () => {
  const result = maxDistance(inputData.case2);
  expect(result).toBe(expected.case2);
});
