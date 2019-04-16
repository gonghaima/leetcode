import singleNumber from "../../src/rules/singleNumber";
import { inputData, expected } from "../mock/singleNumberData";

test("singleNumber should check a number", () => {
  const result = singleNumber(inputData.case1);
  expect(result).toBe(expected.case1);
});
