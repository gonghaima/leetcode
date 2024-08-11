import hasCycle from '../../src/rules/hasCycle';
import { inputData, expected } from '../data/hasCycleData';

test('hasCycle should return a grouped Ids in case1', () => {
  const result = hasCycle(inputData.case1.head);
  expect(result).toEqual(expected.case1);
});

test('hasCycle should return a grouped Ids in case2', () => {
  const result = hasCycle(inputData.case2.head);
  expect(result).toEqual(expected.case2);
});

test('hasCycle should return a grouped Ids in case3', () => {
  const result = hasCycle(inputData.case3.head);
  expect(result).toEqual(expected.case3);
});
