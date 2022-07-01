import findReplaceString from '../../src/rules/findReplaceString';
import { inputData, expected } from '../data/findReplaceStringData';

test('findReplaceString should return expected result for case1', () => {
  const { s, indices, sources, targets } = inputData.case1;
  const result = findReplaceString(s, indices, sources, targets);
  expect(result).toEqual(expected.case1);
});

test('findReplaceString should return expected result for case2', () => {
  const { s, indices, sources, targets } = inputData.case2;
  const result = findReplaceString(s, indices, sources, targets);
  expect(result).toEqual(expected.case2);
});
