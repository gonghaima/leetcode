import findMin from '../../src/rules/findMin';
import { inputData, expected } from '../data/findMinData';

test('findMin should return expected result for case1', () => {
  const result = findMin(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('findMin should return expected result for case2', () => {
  const result = findMin(inputData.case2);
  expect(result).toEqual(expected.case2);
});
