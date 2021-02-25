// import eventualSafeNodes from "../../src/rules/eventualSafeNodes/bfs";
// import eventualSafeNodes from "../../src/rules/eventualSafeNodes/dfs";
import eventualSafeNodes from "../../src/rules/eventualSafeNodes/dfs-v1";

import { inputData, expected } from "../mock/eventualSafeNodesData";

test("eventualSafeNodes should return the number of closed island - case 1", () => {
  const result = eventualSafeNodes(inputData.case1);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test("eventualSafeNodes should return the number of closed island - case 2", () => {
  const result = eventualSafeNodes(inputData.case2);
  expect(result.sort()).toEqual(expected.case2.sort());
});
