import coinChange from "../../src/rules/coinChange/dp";
import { inputData, expected } from "../mock/coinChangeData";

test("coinChange should return correct result for case1", () => {
  const {coins, amount} = inputData.case1;
  const result = coinChange(coins, amount);
  expect(result).toEqual(expected.case1);
});

test("coinChange should return correct result for case2", () => {
  const {coins, amount} = inputData.case2;
  const result = coinChange(coins, amount);
  expect(result).toEqual(expected.case2);
});

test("coinChange should return correct result for case3", () => {
  const {coins, amount} = inputData.case3;
  const result = coinChange(coins, amount);
  expect(result).toEqual(expected.case3);
});

test("coinChange should return correct result for case4", () => {
  const {coins, amount} = inputData.case4;
  const result = coinChange(coins, amount);
  expect(result).toEqual(expected.case4);
});

test("coinChange should return correct result for case5", () => {
  const {coins, amount} = inputData.case5;
  const result = coinChange(coins, amount);
  expect(result).toEqual(expected.case5);
});

test("coinChange should return correct result for case6", () => {
  const {coins, amount} = inputData.case6;
  const result = coinChange(coins, amount);
  expect(result).toEqual(expected.case6);
});