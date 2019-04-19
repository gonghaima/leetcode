import pascalsTriangleII from "../../src/rules/pascalsTriangleII";
import { inputData, expected } from "../mock/pascalsTriangleIIData";

test("pascalsTriangleII should return correct result array", () => {
  expect(pascalsTriangleII(inputData.case1)).toEqual(expected.case1);
});
