
import findTheCity from "../../src/rules/findTheCity";
import { inputData, expected } from "../mock/findTheCityData";

test("findTheCity should return expected result for case1", () => {
  const result = findTheCity(inputData.case1.n, inputData.case1.edges, inputData.case1.distanceThreshold);
  expect(result).toEqual(expected.case1);
});