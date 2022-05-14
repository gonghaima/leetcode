import customSortString from '../../src/rules/customSortString';
import { inputData, expected } from '../data/customSortStringData';

test('customSortString should return correct result for case1', () => {
  const { order, s } = inputData.case1;
  const result = customSortString(order, s);
  expect(result).toEqual(expected.case1);
});

test('customSortString should return correct result for case2', () => {
  const { order, s } = inputData.case2;
  const result = customSortString(order, s);
  expect(result).toEqual(expected.case2);
});
