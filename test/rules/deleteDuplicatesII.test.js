import { isNodeEqual } from '../../src/models/listNode-v1';
import deleteDuplicatesII from '../../src/rules/deleteDuplicatesII';
import { inputData, expected } from '../data/deleteDuplicatesIIData';

test('deleteDuplicatesII should return expected result for case1', () => {
  const result = deleteDuplicatesII(inputData.case1);
  expect(isNodeEqual(result, expected.case1)).toEqual(true);
});

test('deleteDuplicatesII should return expected result for case2', () => {
  const result = deleteDuplicatesII(inputData.case2);
  expect(isNodeEqual(result, expected.case2)).toEqual(true);
});
