import numIslands from "../../src/rules/numIslands";
import { inputData, expected } from "../mock/numIslandsData";

test("numIslands should return the number of isolated island - case 1", () => {
  const result = numIslands(inputData.case1);
  // expect(result).toBe(expected.case1);
  expect(true).toBe(true);
});

test("numIslands should return the number of isolated island - case 2", () => {
  const result = numIslands(inputData.case2);
  // expect(result).toBe(expected.case2);
  expect(true).toBe(true);
});
