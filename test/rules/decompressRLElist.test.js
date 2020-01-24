import decompressRLElist from "../../src/rules/decompressRLElist";
import { inputData, expected } from "../mock/decompressRLElistData";

test("decompressRLElist should return max profit from a given list", () => {
  const result = decompressRLElist(inputData.case1);
  expect(result).toBe(expected.case1);
});