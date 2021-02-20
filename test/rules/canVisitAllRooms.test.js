import canVisitAllRooms from "../../src/rules/canVisitAllRooms";

import { inputData, expected } from "../mock/canVisitAllRoomsData";

test("canVisitAllRooms should return correct result from - case 1", () => {
  const result = canVisitAllRooms(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("canVisitAllRooms should return correct result from - case 2", () => {
  const result = canVisitAllRooms(inputData.case2);
  expect(result).toBe(expected.case2);
});

