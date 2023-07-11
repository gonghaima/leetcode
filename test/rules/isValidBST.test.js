import isValidBST from '../../src/rules/isValidBST';
import { inputData, expected } from '../data/isValidBSTData';

test('isValidBST should return the distance for case1', () => {
  const result = isValidBST(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('isValidBST should return the distance for case2', () => {
  const result = isValidBST(inputData.case2);
  expect(result).toEqual(expected.case2);
});
