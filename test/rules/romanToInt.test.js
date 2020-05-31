import romanToInt from "../../src/rules/romanToInt";
import { inputData, expected } from "../mock/romanToIntData";

test("romanToInt should return correct value from case one", () => {
  const result = romanToInt(inputData.case1);
  expect(result).toBe(expected.case1);
});
