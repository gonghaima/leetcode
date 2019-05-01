import trailingZeroes from "../../src/rules/trailingZeroes";
import { inputData, expected } from "../mock/trailingZeroesData";
test("trailingZeroes function should return the number of trailing zeroes", () => {
  expect(trailingZeroes(inputData.case1)).toEqual(expected.case1);
  expect(trailingZeroes(inputData.case2)).toEqual(expected.case2);
});
