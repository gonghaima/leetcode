import pascalsTriangleII from "../../src/rules/pascalsTriangleII";
import { inputData, expected } from "../data/pascalsTriangleIIData";

test("pascalsTriangleII should return correct result array", () => {
  expect(pascalsTriangleII(inputData.case1)).toEqual(expected.case1);
});
