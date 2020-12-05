import findCircleNum from "../../src/rules/findCircleNum";
import findCircleNumSolution1 from "../../src/rules/findCircleNum/solution1";
import findCircleNumSolution2 from "../../src/rules/findCircleNum/unionFind";
import { inputData, expected } from "../mock/findCircleNumData";

test("findCircleNum should find the number of direct related students, for case 1", () => {
  const result = findCircleNum(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("findCircleNum should find the number of direct related students, for case 2", () => {
  const result = findCircleNum(inputData.case2);
  expect(result).toBe(expected.case2);
});


test("findCircleNumSolution1 should find the number of direct related students, for case 1", () => {
  const result = findCircleNumSolution1(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("findCircleNumSolution1 should find the number of direct related students, for case 2", () => {
  const result = findCircleNumSolution1(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("findCircleNumSolution2 should find the number of direct related students, for case 1", () => {
  const result = findCircleNumSolution2(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("findCircleNumSolution2 should find the number of direct related students, for case 2", () => {
  const result = findCircleNumSolution2(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("findCircleNumSolution2 should find the number of direct related students, for case 3", () => {
  const result = findCircleNumSolution2(inputData.case3);
  expect(result).toBe(expected.case3);
});

test("findCircleNumSolution2 should find the number of direct related students, for case 4", () => {
  const result = findCircleNumSolution2(inputData.case4);
  expect(result).toBe(expected.case4);
});