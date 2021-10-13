import countPrimes from "../../src/rules/countPrimes";
import { inputData, expected } from "../data/countPrimesData";

test("countPrimes should return correct number of prime numbers c1", () => {
  const result = countPrimes(inputData.case1);
  expect(result).toBe(expected.case1);
});

test("countPrimes should return correct number of prime numbers c2", () => {
  const result = countPrimes(inputData.case2);
  expect(result).toBe(expected.case2);
});

test("countPrimes should return correct number of prime numbers c3", () => {
  const result = countPrimes(inputData.case3);
  expect(result).toBe(expected.case3);
});
