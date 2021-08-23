
import mincostTickets from "../../src/rules/mincostTickets/twoPointers";
import { inputData, expected } from "../mock/mincostTicketsData";

test("mincostTickets should return expected result for case1", () => {
  const { days, costs } = inputData.case1;
  const result = mincostTickets(days, costs);
  expect(result).toEqual(expected.case1);
});

test("mincostTickets should return expected result for case2", () => {
  const { days, costs } = inputData.case2;
  const result = mincostTickets(days, costs);
  expect(result).toEqual(expected.case2);
});


