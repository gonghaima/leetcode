import splitIntoFibonacci from '../../src/rules/splitIntoFibonacci';
import { inputData, expected } from '../data/splitIntoFibonacciData';

test('splitIntoFibonacci should return expected result for case1', () => {
  const result = splitIntoFibonacci(inputData.case1, inputData.case1);
  expect(result).toEqual(expected.case1);
});
test('splitIntoFibonacci should return expected result for case2', () => {
  const result = splitIntoFibonacci(inputData.case2, inputData.case2);
  expect(result).toEqual(expected.case2);
});
