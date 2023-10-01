import dailyTemperatures from '../../src/rules/dailyTemperatures';

import { inputData, expected } from '../data/dailyTemperaturesData';

test('dailyTemperatures should return expected result for case1', () => {
  const result = dailyTemperatures(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('dailyTemperatures should return expected result for case2', () => {
  const result = dailyTemperatures(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('dailyTemperatures should return expected result for case3', () => {
  const result = dailyTemperatures(inputData.case3);
  expect(result).toEqual(expected.case3);
});
