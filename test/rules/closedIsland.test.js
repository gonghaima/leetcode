// import closedIsland from "../../src/rules/closedIsland/bfs";
// import closedIsland from "../../src/rules/closedIsland/bfs-v1";
import closedIsland from "../../src/rules/closedIsland/dfs";

import { inputData, expected } from "../mock/closedIslandData";

test("closedIsland should return the number of closed island - case 1", () => {
  const result = closedIsland(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("closedIsland should return the number of closed island - case 2", () => {
  const result = closedIsland(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("closedIsland should return the number of closed island - case 3", () => {
  const result = closedIsland(inputData.case3);
  expect(result).toBe(expected.case3);
});