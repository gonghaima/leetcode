import majorityElement from "../../src/rules/majorityElement";
import { inputData, expected } from "../mock/majorityElementData";

test("majorityElement should work for case 1", () => {
  const result = majorityElement(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("majorityElement should work for case 2", () => {
  const result = majorityElement(inputData.case2);
  expect(result).toBe(expected.case2);
});
