import mergeIntervals from '../../src/rules/mergeIntervals';

import { inputData, expected } from '../data/mergeIntervalsData';

test('mergeIntervals should return expected result for case1', () => {
  const result = mergeIntervals(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('mergeIntervals should return expected result for case2', () => {
  const result = mergeIntervals(inputData.case2);
  expect(result).toEqual(expected.case2);
});
