import findMinArrowShots from '../../src/rules/findMinArrowShots';
import { inputData, expected } from '../data/findMinArrowShotsData';

test('findMinArrowShots should return expected result for case1', () => {
  const result = findMinArrowShots(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('findMinArrowShots should return expected result for case2', () => {
  const result = findMinArrowShots(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('findMinArrowShots should return expected result for case3', () => {
  const result = findMinArrowShots(inputData.case3);
  expect(result).toEqual(expected.case3);
});
