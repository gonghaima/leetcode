import plusOne from "../../src/rules/plusOne";
import { inputData, expected } from "../mock/plusOneData";
test("plusOne function should increase one from last item from cases data", () => {
  expect(plusOne(inputData.case1)).toBe(expected.case1);
  expect(plusOne(inputData.case2)).toBe(expected.case2);
});
