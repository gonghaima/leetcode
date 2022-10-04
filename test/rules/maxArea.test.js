import maxArea from '../../src/rules/maxArea';
import { inputData, expected } from '../data/maxAreaData';

test('maxArea should return the distance for case1', () => {
  const result = maxArea(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('maxArea should return the distance for case2', () => {
  const result = maxArea(inputData.case2);
  expect(result).toEqual(expected.case2);
});
