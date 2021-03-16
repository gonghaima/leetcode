// import networkDelayTime from "../../src/rules/networkDelayTime/Topological";
// import networkDelayTime from "../../src/rules/networkDelayTime";
// import networkDelayTime from "../../src/rules/networkDelayTime/index-nw";
// import networkDelayTime from "../../src/rules/networkDelayTime/bellmanFord";
import networkDelayTime from "../../src/rules/networkDelayTime/dijikstra";
import { inputData, expected } from "../mock/networkDelayTimeData";

test("networkDelayTime should return expected result for case1", () => {
  const result = networkDelayTime(inputData.case1.times, inputData.case1.n, inputData.case1.k);
  expect(result).toEqual(expected.case1);
});

test("networkDelayTime should return expected result for case2", () => {
  const result = networkDelayTime(inputData.case2.times, inputData.case2.n, inputData.case2.k);
  expect(result).toEqual(expected.case2);
});

test("networkDelayTime should return expected result for case3", () => {
  const result = networkDelayTime(inputData.case3.times, inputData.case3.n, inputData.case3.k);
  expect(result).toEqual(expected.case3);
});

test("networkDelayTime should return expected result for case4", () => {
  const result = networkDelayTime(inputData.case4.times, inputData.case4.n, inputData.case4.k);
  expect(result).toEqual(expected.case4);
});

test("networkDelayTime should return expected result for case5", () => {
  const result = networkDelayTime(inputData.case5.times, inputData.case5.n, inputData.case5.k);
  expect(result).toEqual(expected.case5);
});

test("networkDelayTime should return expected result for case6", () => {
  const result = networkDelayTime(inputData.case6.times, inputData.case6.n, inputData.case6.k);
  expect(result).toEqual(expected.case6);
});