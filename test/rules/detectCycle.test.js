import detectCycle from '../../src/rules/detectCycle/dp';

import { inputData, expected } from '../data/detectCycleData';

test('detectCycle should return expected result for case1', () => {
  const { head } = inputData.case1;
  const result = detectCycle(head);
  expect(result).toEqual(expected.case1);
});

test('detectCycle should return expected result for case2', () => {
  const { head } = inputData.case2;
  const result = detectCycle(head);
  expect(result).toEqual(expected.case2);
});

test('detectCycle should return expected result for case3', () => {
  const { head } = inputData.case2;
  const result = detectCycle(head);
  expect(result).toEqual(expected.case2);
});
