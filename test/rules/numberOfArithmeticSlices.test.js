import numberOfArithmeticSlices from "../../src/rules/numberOfArithmeticSlices";
import { inputData, expected } from "../mock/maxProfitData";

test("numberOfArithmeticSlices should return the number of arithmetic slices from a given list", () => {
  const result = numberOfArithmeticSlices(inputData.case1);
  expect(result).toBe(expected.case1);
});
