import cellCompete from "../../src/rules/cellCompete";
import { inputData, expected } from "../mock/cellCompeteData";

test("cellCompete should return max profit from a given list", () => {
  const result = cellCompete(inputData.case1.state, inputData.case1.days);
  expect(result).toBe(expected.case1);
});

test("cellCompete should return 0, when there is no transaction available", () => {
  const result = cellCompete(inputData.case2.state, inputData.case2.days);
  expect(result).toBe(expected.case2);
});
