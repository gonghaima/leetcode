import decompressRLElist from "../../src/rules/decompressRLElist";
import { inputData, expected } from "../data/decompressRLElistData";

test("decompressRLElist should return max profit from a given list", () => {
  const result = decompressRLElist(inputData.case1);
  expect(result).toEqual(expected.case1);
});