import plusOne from "../../src/rules/plusOne";
import { inputData, expected } from "../data/plusOneData";
test("plusOne function should increase one from last item from cases data", () => {
  // expect(plusOne(inputData.case1)).toEqual(expected.case1);
  // expect(plusOne(inputData.case2)).toEqual(expected.case2);
  // expect(plusOne(inputData.case3)).toEqual(expected.case3);
  // expect(plusOne(inputData.case4)).toEqual(expected.case4);
  // expect(plusOne(inputData.case5)).toEqual(expected.case5);
  expect(plusOne(inputData.case6)).toEqual(expected.case6);
});
