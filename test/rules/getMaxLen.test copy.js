import getMaxLen from '../../src/rules/getMaxLen';
import { inputData, expected } from '../data/getMaxLenData';

test('getMaxLen should return correct result for case1', () => {
  const result = getMaxLen(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('getMaxLen should return correct result for case2', () => {
  const result = getMaxLen(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('getMaxLen should return correct result for case3', () => {
  const result = getMaxLen(inputData.case3);
  expect(result).toEqual(expected.case3);
});
