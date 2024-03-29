// import maxAreaOfIsland from "../../src/rules/maxAreaOfIsland";
// import maxAreaOfIsland from "../../src/rules/maxAreaOfIsland/back";
import maxAreaOfIsland from "../../src/rules/maxAreaOfIsland/dfs-Iterative";

import { inputData, expected } from "../data/maxAreaOfIslandData";

// test("maxAreaOfIsland should return the number of isolated island - case 1", () => {
//   const result = maxAreaOfIsland(inputData.case1);
//   expect(result).toBe(expected.case1);
// });

// test("maxAreaOfIsland should return the number of isolated island - case 2", () => {
//   const result = maxAreaOfIsland(inputData.case2);
//   expect(result).toBe(expected.case2);
// });

test("maxAreaOfIsland should return the number of isolated island - case 3", () => {
  const result = maxAreaOfIsland(inputData.case3);
  expect(result).toBe(expected.case3);
});
