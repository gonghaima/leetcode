// import numIslands from "../../src/rules/numIslands";
import numIslands from "../../src/rules/numIslands/bfs";
import { inputData, expected } from "../mock/numIslandsData";

test("numIslands should return the number of isolated island - case 1", () => {
  const result = numIslands(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("numIslands should return the number of isolated island - case 2", () => {
  const result = numIslands(inputData.case2);
  expect(result).toBe(expected.case2);
});
