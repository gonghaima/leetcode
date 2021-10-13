import { isSymmetric } from '../../../src/rules/binaryTree/isSymmetric';
import { isSymmetricV2 } from '../../../src/rules/binaryTree/isSymmetric/solution2';
import { inputData, expected } from '../../data/binaryTree/isSymmetricData';

test('isSymmetric should return true for symmetric tree', () => {
  const actual = isSymmetric(inputData.case1);
  expect(actual).toBe(expected.case1);
});

test('isSymmetric should return false for non-symmetric tree', () => {
  const actual = isSymmetric(inputData.case2);
  expect(actual).toBe(expected.case2);
});

test('isSymmetricV2 should return true for symmetric tree', () => {
  const actual = isSymmetricV2(inputData.case1);
  expect(actual).toBe(expected.case1);
});

test('isSymmetricV2 should return false for non-symmetric tree', () => {
  const actual = isSymmetricV2(inputData.case2);
  expect(actual).toBe(expected.case2);
});
