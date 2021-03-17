
import findTheCity from "../../src/rules/findTheCity";
import { inputData, expected } from "../mock/findTheCityData";

test("findTheCity should return expected result for case1", () => {
  const result = findTheCity(inputData.case1.times, inputData.case1.n, inputData.case1.k);
  expect(result).toEqual(expected.case1);
});