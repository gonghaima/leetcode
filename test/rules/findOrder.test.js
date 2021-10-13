// import findOrder from "../../src/rules/findOrder/Topological";
import findOrder from "../../src/rules/findOrder/dfs";
import { inputData, expected } from "../data/findOrderData";

test("findOrder should return expected result for case1", () => {
  const result = findOrder(inputData.case1.numCourses, inputData.case1.prerequisites);
  expect(result).toEqual(expected.case1);
});

test("findOrder should return expected result for case2", () => {
  const result = findOrder(inputData.case2.numCourses, inputData.case2.prerequisites);
  expect(result.sort()).toEqual(expected.case2.sort());
});

test("findOrder should return expected result for case3", () => {
  const result = findOrder(inputData.case3.numCourses, inputData.case3.prerequisites);
  expect(result).toEqual(expected.case3);
});