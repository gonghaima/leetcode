import atoi from "../../src/rules/atoi";
import { inputData, expected } from "../mock/atoiData";

test("atoi should return correct data from case 1", () => {
  const result = atoi(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("atoi should return correct data from case 2", () => {
  const result = atoi(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("atoi should return correct data from case 3", () => {
  const result = atoi(inputData.case3);
  expect(result).toBe(expected.case3);
});

test("atoi should return correct data from case 4", () => {
  const result = atoi(inputData.case4);
  expect(result).toBe(expected.case4);
});

test("atoi should return correct data from case 5", () => {
  const result = atoi(inputData.case5);
  expect(result).toBe(expected.case5);
});


test("atoi should return correct data from case 6", () => {
  const result = atoi(inputData.case6);
  expect(result).toBe(expected.case6);
});


test("atoi should return correct data from case 7", () => {
  const result = atoi(inputData.case7);
  expect(result).toBe(expected.case7);
});

test("atoi should return correct data from case 8", () => {
  const result = atoi(inputData.case8);
  expect(result).toBe(expected.case8);
});

test("atoi should return correct data from case 9", () => {
  const result = atoi(inputData.case9);
  expect(result).toBe(expected.case9);
});