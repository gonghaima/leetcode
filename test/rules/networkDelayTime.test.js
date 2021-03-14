// import networkDelayTime from "../../src/rules/networkDelayTime/Topological";
import networkDelayTime from "../../src/rules/networkDelayTime";
import { inputData, expected } from "../mock/networkDelayTimeData";

test("networkDelayTime should return expected result for case1", () => {
  const result = networkDelayTime(inputData.case1.times, inputData.case1.n, inputData.case1.k);
  expect(result).toEqual(expected.case1);
});

test("networkDelayTime should return expected result for case2", () => {
  const result = networkDelayTime(inputData.case2.times, inputData.case2.n, inputData.case1.k);
  expect(result.sort()).toEqual(expected.case2.sort());
});

test("networkDelayTime should return expected result for case3", () => {
  const result = networkDelayTime(inputData.case3.times, inputData.case3.n, inputData.case1.k);
  expect(result).toEqual(expected.case3);
});