import maxProduct from "../../src/rules/maxProduct";
import { inputData, expected } from "../data/maxProductData";

test("maxProduct should return correct result for case1", () => {
  const result = maxProduct(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("maxProduct should return correct result for case2", () => {
  const result = maxProduct(inputData.case2);
  expect(result).toEqual(expected.case2);
});