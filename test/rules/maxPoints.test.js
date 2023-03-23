import maxPoints from '../../src/rules/maxPoints';
import { inputData, expected } from '../data/maxPointsData';

test('maxPoints should return correct result for case1', () => {
  const result = maxPoints(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('maxPoints should return correct result for case2', () => {
  const result = maxPoints(inputData.case2);
  expect(result).toEqual(expected.case2);
});
