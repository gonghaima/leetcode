import sqrtX from "../../src/rules/SqrtX";
import { inputData, expected } from "../mock/sqrtXData";
test("sqrtX function should calculate correct result from cases data", () => {
  expect(sqrtX(inputData.case1)).toEqual(expected.case1);
  expect(sqrtX(inputData.case2)).toEqual(expected.case2);
  expect(sqrtX(inputData.case3)).toEqual(expected.case3);
});
