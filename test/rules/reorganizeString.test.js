import reorganizeString from '../../src/rules/reorganizeString';
import { inputData, expected } from '../data/reorganizeStringData';

test('reorganizeString should return correct result for case1', () => {
  const result = reorganizeString(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('reorganizeString should return correct result for case2', () => {
  const result = reorganizeString(inputData.case2);
  expect(result).toEqual(expected.case2);
});
