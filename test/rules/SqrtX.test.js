import sqrtX from "../../src/rules/SqrtX";
import { inputData, expected } from "../mock/sqrtXData";
test("sqrtX function should calculate correct result from cases data", () => {
  expect(sqrtX(inputData.case1.a, inputData.case1.b)).toEqual(expected.case1);
  expect(sqrtX(inputData.case2.a, inputData.case2.b)).toEqual(expected.case2);
});
