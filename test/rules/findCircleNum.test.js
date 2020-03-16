import findCircleNum from "../../src/rules/findCircleNum";
import { inputData, expected } from "../mock/findCircleNumData";

test("findCircleNum should find the number of direct related students, for case 1", () => {
  const result = findCircleNum(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("findCircleNum should find the number of direct related students, for case 2", () => {
  const result = findCircleNum(inputData.case2);
  expect(result).toBe(expected.case2);
});
