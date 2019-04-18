import pascalsTriangle from "../../src/rules/pascalsTriangle";
import pascalsTriangle1 from "../../src/rules/pascalsTriangle/pascalsTriangle";
import { inputData, expected } from "../mock/pascalsTriangleData";

// test("pascalsTriangle should check a number", () => {
//   const result = pascalsTriangle(inputData.case1);
//   expect(result[2]).toBe(expected.case1[2]);
// });

test("pascalsTriangle1 should check a number", () => {
  const result = pascalsTriangle1(inputData.case1);
  expect(result[2][2]).toBe(expected.case1[2][2]);
});
