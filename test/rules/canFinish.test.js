import canFinish from "../../src/rules/canFinish";
import { inputData, expected } from "../mock/canFinishData";

test("canFinish should return expected result for case1", () => {
  const result = canFinish(inputData.case1.numCourses, inputData.case1.prerequisites);
  expect(result).toEqual(expected.case1);
});

test("canFinish should return expected result for case2", () => {
  const result = canFinish(inputData.case2.numCourses, inputData.case2.prerequisites);
  expect(result).toEqual(expected.case2);
});