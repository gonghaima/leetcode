
import totalFruit from "../../src/rules/totalFruit";
import { inputData, expected } from "../mock/totalFruitData";

test("totalFruit should return expected result for case1", () => {
  const result = totalFruit(inputData.case1);
  expect(result).toEqual(expected.case1);
});
test("totalFruit should return expected result for case2", () => {
  const result = totalFruit(inputData.case2);
  expect(result).toEqual(expected.case2);
});
test("totalFruit should return expected result for case3", () => {
  const result = totalFruit(inputData.case3);
  expect(result).toEqual(expected.case3);
});
test("totalFruit should return expected result for case4", () => {
  const result = totalFruit(inputData.case4);
  expect(result).toEqual(expected.case4);
});
