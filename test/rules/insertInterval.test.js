import insertInterval from '../../src/rules/insertInterval';
import { inputData, expected } from '../data/insertIntervalData';

test('insertInterval should return correct result for case1', () => {
  const { intervals, newInterval } = inputData.case1;
  const result = insertInterval(intervals, newInterval);
  expect(result).toEqual(expected.case1);
});

// test('insertInterval should return correct result for case2', () => {
//   const { intervals, newInterval } = inputData.case2;
//   const result = insertInterval(intervals, newInterval);
//   expect(result).toEqual(expected.case1);
// });
