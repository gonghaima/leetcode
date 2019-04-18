import pascalsTriangleII from "../../src/rules/pascalsTriangleII";

import { inputData, expected } from "../mock/pascalsTriangleIIData";

test("pascalsTriangleII should return an expected array, given an index number as input", () => {
  const result = pascalsTriangleII(inputData.case1);
  expect(result[2]).toBe(expected.case1[2]);
});
