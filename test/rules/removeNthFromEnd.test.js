import removeNthFromEnd from '../../src/rules/removeNthFromEnd';
import { inputData, expected } from '../data/removeNthFromEndData';

test('removeNthFromEnd should return correct result for case1', () => {
  const { head, n } = inputData.case1;
  const result = removeNthFromEnd(head, n);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test('removeNthFromEnd should return correct result for case2', () => {
  const { head, n } = inputData.case2;
  const result = removeNthFromEnd(head, n);
  expect(result.sort()).toEqual(expected.case2.sort());
});

test('removeNthFromEnd should return correct result for case3', () => {
  const { head, n } = inputData.case3;
  const result = removeNthFromEnd(head, n);
  expect(result.sort()).toEqual(expected.case3.sort());
});
