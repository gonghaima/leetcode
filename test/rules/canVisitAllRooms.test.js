// import canVisitAllRooms from "../../src/rules/canVisitAllRooms/bfs";
// import canVisitAllRooms from "../../src/rules/canVisitAllRooms/dfs";
import canVisitAllRooms from "../../src/rules/canVisitAllRooms/dfs-v1";

import { inputData, expected } from "../mock/canVisitAllRoomsData";

test("canVisitAllRooms should return correct result from - case 1", () => {
  const result = canVisitAllRooms(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("canVisitAllRooms should return correct result from - case 2", () => {
  const result = canVisitAllRooms(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("canVisitAllRooms should return correct result from - case 3", () => {
  const result = canVisitAllRooms(inputData.case3);
  expect(result).toBe(expected.case3);
});


test("canVisitAllRooms should return correct result from - case 4", () => {
  const result = canVisitAllRooms(inputData.case4);
  expect(result).toBe(expected.case4);
});
