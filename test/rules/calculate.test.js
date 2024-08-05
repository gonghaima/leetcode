import calculate from '../../src/rules/calculate';

import { inputData, expected } from '../data/calculateData';

test('calculate should return expected result for case1', () => {
  const result = calculate(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('calculate should return expected result for case2', () => {
  const result = calculate(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('calculate should return expected result for case3', () => {
  const result = calculate(inputData.case3);
  expect(result).toEqual(expected.case3);
});
