import hasCycle from '../../src/rules/hasCycle';
import { inputData, expected } from '../data/hasCycleData';

test('hasCycle should return a grouped Ids in case1', () => {
  const result = hasCycle(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('hasCycle should return a grouped Ids in case2', () => {
  const result = hasCycle(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('hasCycle should return a grouped Ids in case3', () => {
  const result = hasCycle(inputData.case3);
  expect(result).toEqual(expected.case3);
});
