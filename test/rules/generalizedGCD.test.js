import generalizedGCD from "../../src/rules/generalizedGCD";
import { inputData, expected } from "../mock/generalizedGCDData";

test("generalizedGCD should return compete cells for test case 1", () => {
  const result = generalizedGCD(inputData.case1.num, inputData.case1.arr);
  console.log(result);

  expect(result).toEqual(expected.case1);
});

test("generalizedGCD should return compete cells for test case 2", () => {
  const result = generalizedGCD(inputData.case2.num, inputData.case2.arr);
  expect(result).toEqual(expected.case2);
});
