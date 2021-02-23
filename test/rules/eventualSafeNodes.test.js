import eventualSafeNodes from "../../src/rules/eventualSafeNodes/dfs";

import { inputData, expected } from "../mock/eventualSafeNodesData";

test("eventualSafeNodes should return the number of closed island - case 1", () => {
  const result = eventualSafeNodes(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("eventualSafeNodes should return the number of closed island - case 2", () => {
  const result = eventualSafeNodes(inputData.case2);
  expect(result).toBe(expected.case2);
});
