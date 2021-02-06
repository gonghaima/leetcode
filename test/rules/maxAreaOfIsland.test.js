import maxAreaOfIsland from "../../src/rules/maxAreaOfIsland";

import { inputData, expected } from "../mock/maxAreaOfIslandData";

test("maxAreaOfIsland should return the number of isolated island - case 1", () => {
  const result = maxAreaOfIsland(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("maxAreaOfIsland should return the number of isolated island - case 2", () => {
  const result = maxAreaOfIsland(inputData.case2);
  expect(result).toBe(expected.case2);
});
