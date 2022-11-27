import findDuplicate from '../../src/rules/findDuplicate';

import { inputData, expected } from '../data/findDuplicateData';

test('findDuplicate should return expected result for case1', () => {
  const result = findDuplicate(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('findDuplicate should return expected result for case2', () => {
  const result = findDuplicate(inputData.case2);
  expect(result).toEqual(expected.case2);
});
