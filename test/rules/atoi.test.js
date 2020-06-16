import atoi from "../../src/rules/atoi";
import { inputData, expected } from "../mock/atoiData";

test("atoi should return correct data from case 1", () => {
  const result = atoi(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("atoi should return correct data from case 2", () => {
  const result = atoi(inputData.case2);
  expect(result).toBe(expected.case2);
});
