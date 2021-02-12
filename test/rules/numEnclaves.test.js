import numEnclaves from "../../src/rules/numEnclaves";

import { inputData, expected } from "../mock/numEnclavesData";

test("numEnclaves should return the number of isolated island - case 1", () => {
  const result = numEnclaves(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("numEnclaves should return the number of isolated island - case 2", () => {
  const result = numEnclaves(inputData.case2);
  expect(result).toBe(expected.case2);
});

