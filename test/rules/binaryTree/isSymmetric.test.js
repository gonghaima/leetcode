import { isSymmetric } from '../../../src/rules/binaryTree/isSymmetric';
import { inputData, expected } from '../../mock/binaryTree/isSymmetricData';

test('isSymmetric should return true for symmetric tree', () => {
  const actual = isSymmetric(inputData.case1);
  expect(actual).toBe(expected.case1);
});

test('isSymmetric should return false for non-symmetric tree', () => {
  const actual = isSymmetric(inputData.case2);
  expect(actual).toBe(expected.case2);
});
