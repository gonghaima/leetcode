// import isBipartite from "../../src/rules/isBipartite/bfs";
import isBipartite from "../../src/rules/isBipartite/dfs";
import { inputData, expected } from "../data/isBipartiteData";

test("isBipartite should return the distance for case1", () => {
  const result = isBipartite(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("isBipartite should return the distance for case2", () => {
  const result = isBipartite(inputData.case2);
  expect(result).toBe(expected.case2);
});
