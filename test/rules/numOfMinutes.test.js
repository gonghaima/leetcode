import numOfMinutes from "../../src/rules/numOfMinutes";

import { inputData, expected } from "../mock/numOfMinutesData";

test("numOfMinutes should return the number of isolated island - case 1", () => {
  const { n, headID, manager, informTime} = inputData.case1;
  const result = numOfMinutes(n, headID, manager, informTime);
  expect(result).toBe(expected.case1);
});

test("numOfMinutes should return the number of isolated island - case 2", () => {
  const { n, headID, manager, informTime } = inputData.case2;
  const result = numOfMinutes(n, headID, manager, informTime);
  expect(result).toBe(expected.case2);
});

test("numOfMinutes should return the number of isolated island - case 3", () => {
  const { n, headID, manager, informTime } = inputData.case3;
  const result = numOfMinutes(n, headID, manager, informTime);
  expect(result).toBe(expected.case3);
});

test("numOfMinutes should return the number of isolated island - case 4", () => {
  const { n, headID, manager, informTime } = inputData.case4;
  const result = numOfMinutes(n, headID, manager, informTime);
  expect(result).toBe(expected.case4);
});

test("numOfMinutes should return the number of isolated island - case 5", () => {
  const { n, headID, manager, informTime } = inputData.case5;
  const result = numOfMinutes(n, headID, manager, informTime);
  expect(result).toBe(expected.case5);
});

