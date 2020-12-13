import findRedundantConnection from "../../src/rules/findRedundantConnection";
import { inputData, expected } from "../mock/findRedundantConnectionData";

test("findRedundantConnection should find the number of direct related students, for case 1", () => {
  const result = findRedundantConnection(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("findRedundantConnection should find the number of direct related students, for case 2", () => {
  const result = findRedundantConnection(inputData.case2);
  expect(result).toBe(expected.case2);
});
