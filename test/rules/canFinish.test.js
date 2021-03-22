// import canFinish from "../../src/rules/canFinish";
// import canFinish from "../../src/rules/canFinish/dfs";
// import canFinish from "../../src/rules/canFinish/dfs-v1";
import canFinish from "../../src/rules/canFinish/topologicalSort";
// import canFinish from "../../src/rules/canFinish/dfs-v2";
import { inputData, expected } from "../mock/canFinishData";

test("canFinish should return expected result for case1", () => {
  const result = canFinish(inputData.case1.numCourses, inputData.case1.prerequisites);
  expect(result).toEqual(expected.case1);
});

test("canFinish should return expected result for case2", () => {
  const result = canFinish(inputData.case2.numCourses, inputData.case2.prerequisites);
  expect(result).toEqual(expected.case2);
});

test("canFinish should return expected result for case3", () => {
  const result = canFinish(inputData.case3.numCourses, inputData.case3.prerequisites);
  expect(result).toEqual(expected.case3);
});

test("canFinish should return expected result for case4", () => {
  const result = canFinish(inputData.case4.numCourses, inputData.case4.prerequisites);
  expect(result).toEqual(expected.case4);
});