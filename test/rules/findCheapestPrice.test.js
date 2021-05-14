
// import findCheapestPrice from "../../src/rules/findCheapestPrice";
// import findCheapestPrice from "../../src/rules/findCheapestPrice/BellmanFord";
import findCheapestPrice from "../../src/rules/findCheapestPrice/Dijkstra";
// import findCheapestPrice from "../../src/rules/findCheapestPrice/dijkstra-1";
import { inputData, expected } from "../mock/findCheapestPriceData";

test("findCheapestPrice should return expected result for case1", () => {
  const result = findCheapestPrice(inputData.case1.n, inputData.case1.edges, inputData.case1.src,inputData.case1.dst,inputData.case1.K);
  expect(result).toEqual(expected.case1);
});
test("findCheapestPrice should return expected result for case2", () => {
  const result = findCheapestPrice(inputData.case2.n, inputData.case2.edges, inputData.case2.src,inputData.case2.dst,inputData.case2.K);
  expect(result).toEqual(expected.case2);
});

test("findCheapestPrice should return expected result for case3", () => {
  const result = findCheapestPrice(inputData.case3.n, inputData.case3.edges, inputData.case3.src, inputData.case3.dst, inputData.case3.K);
  expect(result).toEqual(expected.case3);
});

test("findCheapestPrice should return expected result for case4", () => {
  const result = findCheapestPrice(inputData.case4.n, inputData.case4.edges, inputData.case4.src, inputData.case4.dst, inputData.case4.K);
  expect(result).toEqual(expected.case4);
});
