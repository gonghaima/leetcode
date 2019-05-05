import countPrimes from "../../src/rules/countPrimes";
import { inputData, expected } from "../mock/countPrimesData";

test("countPrimes should return correct number of prime numbers", () => {
  const result = countPrimes(inputData.case1);
  expect(result).toBe(expected.case1);
});
