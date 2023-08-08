import reverseList from '../../src/rules/reverseList';
import { inputData, expected } from '../data/reverseListData';

test('reverseList should return correct result for case1', () => {
  const result = reverseList(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('reverseList should return correct result for case2', () => {
  const result = reverseList(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('reverseList should return correct result for case3', () => {
  const result = reverseList(inputData.case3);
  expect(result).toEqual(expected.case3);
});
