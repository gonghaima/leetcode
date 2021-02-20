import closedIsland from "../../src/rules/closedIsland";

import { inputData, expected } from "../mock/closedIslandData";

test("closedIsland should return the number of closed island - case 1", () => {
  const result = closedIsland(inputData.case1);
  expect(result).toBe(expected.case1);
});