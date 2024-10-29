import { isNodeEqual } from '../../src/models/listNode-v1';
import partitionList from '../../src/rules/partitionList';
import { inputData, expected } from '../data/partitionListData';

test('partitionList should return expected result for case1', () => {
  const { head, x } = inputData.case1;
  const result = partitionList(head, x);
  expect(isNodeEqual(result, expected.case1)).toEqual(true);
});

test('partitionList should return expected result for case2', () => {
  const { head, x } = inputData.case2;
  const result = partitionList(head, x);
  expect(isNodeEqual(result, expected.case2)).toEqual(true);
});
