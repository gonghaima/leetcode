
// import findTheCity from "../../src/rules/findTheCity";
import findTheCity from "../../src/rules/findTheCity/dijikstra";
import { inputData, expected } from "../mock/findTheCityData";

test("findTheCity should return expected result for case1", () => {
  const result = findTheCity(inputData.case1.n, inputData.case1.edges, inputData.case1.distanceThreshold);
  expect(result).toEqual(expected.case1);
});
test("findTheCity should return expected result for case2", () => {
  const result = findTheCity(inputData.case2.n, inputData.case2.edges, inputData.case2.distanceThreshold);
  expect(result).toEqual(expected.case2);
});

test("findTheCity should return expected result for case3", () => {
  const result = findTheCity(inputData.case3.n, inputData.case3.edges, inputData.case3.distanceThreshold);
  expect(result).toEqual(expected.case3);
});