import maxSubarraySumCircular from '../../src/rules/maxSubarraySumCircular';
import { inputData, expected } from '../data/maxSubarraySumCircularData';

test('maxSubarraySumCircular should return correct result for case1', () => {
  const result = maxSubarraySumCircular(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('maxSubarraySumCircular should return correct result for case2', () => {
  const result = maxSubarraySumCircular(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('maxSubarraySumCircular should return correct result for case3', () => {
  const result = maxSubarraySumCircular(inputData.case3);
  expect(result).toEqual(expected.case3);
});

test('maxSubarraySumCircular should return correct result for case4', () => {
  const result = maxSubarraySumCircular(inputData.case4);
  expect(result).toEqual(expected.case4);
});

test('maxSubarraySumCircular should return correct result for case5', () => {
  const result = maxSubarraySumCircular(inputData.case5);
  expect(result).toEqual(expected.case5);
});
