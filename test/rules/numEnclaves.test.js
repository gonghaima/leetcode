// import numEnclaves from "../../src/rules/numEnclaves";
import numEnclaves from "../../src/rules/numEnclaves/bfs-mine-not-pass";
// import numEnclaves from "../../src/rules/numEnclaves/bfs-mine-1";

import { inputData, expected } from "../mock/numEnclavesData";

test("numEnclaves should return the number of isolated island - case 1", () => {
  const result = numEnclaves(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("numEnclaves should return the number of isolated island - case 2", () => {
  const result = numEnclaves(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("numEnclaves should return the number of isolated island - case 3", () => {
  const result = numEnclaves(inputData.case3);
  expect(result).toBe(expected.case3);
});

test("numEnclaves should return the number of isolated island - case 4", () => {
  const result = numEnclaves(inputData.case4);
  expect(result).toBe(expected.case4);
});

test("numEnclaves should return the number of isolated island - case 5", () => {
  const result = numEnclaves(inputData.case5);
  expect(result).toBe(expected.case5);
});
