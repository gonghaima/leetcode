import searchRotatedSortedArray from '../../src/rules/searchRotatedSortedArray';
import { inputData, expected } from '../data/searchRotatedSortedArrayData';

test('searchRotatedSortedArray should return expected result for case1', () => {
  const { ums, target } = inputData.case1;
  const result = searchRotatedSortedArray(ums, target);
  expect(result).toEqual(expected.case1);
});

test('searchRotatedSortedArray should return expected result for case2', () => {
  const { ums, target } = inputData.case2;
  const result = searchRotatedSortedArray(ums, target);
  expect(result).toEqual(expected.case2);
});

test('searchRotatedSortedArray should return expected result for case3', () => {
  const { ums, target } = inputData.case3;
  const result = searchRotatedSortedArray(ums, target);
  expect(result).toEqual(expected.case3);
});
