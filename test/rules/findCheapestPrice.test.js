
// import findCheapestPrice from "../../src/rules/findCheapestPrice";
import findCheapestPrice from "../../src/rules/findCheapestPrice";
import { inputData, expected } from "../mock/findCheapestPriceData";

test("findCheapestPrice should return expected result for case1", () => {
  const result = findCheapestPrice(inputData.case1.n, inputData.case1.flights, inputData.case1.src,inputData.case1.dst,inputData.case1.K);
  expect(result).toEqual(expected.case1);
});
test("findCheapestPrice should return expected result for case2", () => {
  const result = findCheapestPrice(inputData.case2.n, inputData.case2.flights, inputData.case2.src,inputData.case2.dst,inputData.case2.K);
  expect(result).toEqual(expected.case2);
});
