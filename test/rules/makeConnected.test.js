import makeConnected from "../../src/rules/makeConnected";

import { inputData, expected } from "../data/makeConnectedData";

test("makeConnected should find the largest possible number of moves for case 1", () => {
  const result = makeConnected(inputData.case1.n, inputData.case1.connections);
  expect(result).toEqual(expected.case1);
});

test("makeConnected should find the largest possible number of moves for case 2", () => {
  const result = makeConnected(inputData.case2.n, inputData.case2.connections);
  expect(result).toEqual(expected.case2);
});

test("makeConnected should find the largest possible number of moves for case 3", () => {
  const result = makeConnected(inputData.case3.n, inputData.case3.connections);
  expect(result).toEqual(expected.case3);
});

test("makeConnected should find the largest possible number of moves for case 4", () => {
  const result = makeConnected(inputData.case4.n, inputData.case4.connections);
  expect(result).toEqual(expected.case4);
});
