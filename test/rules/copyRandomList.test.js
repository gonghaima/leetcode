import copyRandomList from '../../src/rules/copyRandomList';
import { inputData, expected } from '../data/copyRandomListData';

test('copyRandomList should return correct result for case1', () => {
  const result = copyRandomList(inputData.case1);
  expect(result || true).toEqual(expected.case1);
});

test('copyRandomList should return correct result for case2', () => {
  const result = copyRandomList(inputData.case2);
  expect(result || true).toEqual(expected.case2);
});
