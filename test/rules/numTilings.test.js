
import numTilings from "../../src/rules/numTilings";

import { inputData, expected } from "../mock/numTilingsData";

test("numTilings should return expected result for case1", () => {
  const result = numTilings(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("numTilings should return expected result for case2", () => {
  const result = numTilings(inputData.case2);
  expect(result).toEqual(expected.case2);
});

// test("numTilings should return expected result for case3", () => {
//   const result = numTilings(inputData.case3);
//   expect(result).toEqual(expected.case3);
// });
