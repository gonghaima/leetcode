import trailingZeroes from "../../src/rules/trailingZeroes";
import trailingZeroes1 from "../../src/rules/trailingZeroes/solution1";
import { inputData, expected } from "../mock/trailingZeroesData";
test("trailingZeroes function should return the number of trailing zeroes", () => {
  expect(trailingZeroes(inputData.case1)).toEqual(expected.case1);
  expect(trailingZeroes(inputData.case2)).toEqual(expected.case2);
  expect(trailingZeroes(inputData.case3)).toEqual(expected.case3);
  expect(trailingZeroes(inputData.case4)).toEqual(expected.case4);
});

test("trailingZeroes1 function should return the number of trailing zeroes", () => {
  expect(trailingZeroes1(inputData.case1)).toEqual(expected.case1);
  expect(trailingZeroes1(inputData.case2)).toEqual(expected.case2);
  expect(trailingZeroes1(inputData.case3)).toEqual(expected.case3);
  expect(trailingZeroes1(inputData.case4)).toEqual(expected.case4);
});
