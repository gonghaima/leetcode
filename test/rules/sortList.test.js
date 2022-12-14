import sortList from '../../src/rules/sortList';
import { inputData, expected } from '../data/sortListData';

test('sortList should return expected result for case1', () => {
  const result = sortList(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('sortList should return expected result for case2', () => {
  const result = sortList(inputData.case2);
  expect(result).toEqual(expected.case2);
});
