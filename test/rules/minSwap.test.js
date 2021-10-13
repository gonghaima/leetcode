import minSwap from "../../src/rules/minSwap";
import { inputData, expected } from "../data/minSwapData";

test("minSwap should return max profit from a given list", () => {
  const result = minSwap(inputData.case1.a, inputData.case1.b);
  expect(result).toBe(expected.case1);
});
