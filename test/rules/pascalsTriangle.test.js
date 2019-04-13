import pascalsTriangle from "../../src/rules/pascalsTriangle";
import { inputData, expected } from "../mock/pascalsTriangleData";

test("pascalsTriangle should check a number", () => {
  const result = pascalsTriangle(inputData.case1);
  expect(result).toBe(expected.case1);
});
