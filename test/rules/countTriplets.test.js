import countTriplets from "../../src/rules/countTriplets";
import { inputData, expected } from "../data/countTripletsData";

test("countTriplets should return correct result for case1", () => {
  const result = countTriplets(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("countTriplets should return correct result for case2", () => {
  const result = countTriplets(inputData.case2);
  expect(result).toEqual(expected.case2);
});
