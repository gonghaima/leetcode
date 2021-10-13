
import minTaps from "../../src/rules/minTaps/dp1";
import { inputData, expected } from "../data/minTapsData";

test("minTaps should return expected result for case1", () => {
  const { n, ranges } = inputData.case1;
  const result = minTaps(n, ranges);
  expect(result).toEqual(expected.case1);
});

test("minTaps should return expected result for case2", () => {
  const { n, ranges } = inputData.case2;
  const result = minTaps(n, ranges);
  expect(result).toEqual(expected.case2);
});

test("minTaps should return expected result for case3", () => {
  const { n, ranges } = inputData.case3;
  const result = minTaps(n, ranges);
  expect(result).toEqual(expected.case3);
});

test("minTaps should return expected result for case4", () => {
  const { n, ranges } = inputData.case4;
  const result = minTaps(n, ranges);
  expect(result).toEqual(expected.case4);
});

test("minTaps should return expected result for case5", () => {
  const { n, ranges } = inputData.case5;
  const result = minTaps(n, ranges);
  expect(result).toEqual(expected.case5);
});



