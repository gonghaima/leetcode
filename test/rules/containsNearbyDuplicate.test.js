import containsNearbyDuplicate from '../../src/rules/containsNearbyDuplicate';
import { inputData, expected } from '../data/containsNearbyDuplicateData';

test('containsNearbyDuplicate should return correct result for case1', () => {
  const { nums, k } = inputData.case1;
  const result = containsNearbyDuplicate(nums, k);
  expect(result).toEqual(expected.case1);
});

test('containsNearbyDuplicate should return correct result for case2', () => {
  const { nums, k } = inputData.case2;
  const result = containsNearbyDuplicate(nums, k);
  expect(result).toEqual(expected.case2);
});

test('containsNearbyDuplicate should return correct result for case3', () => {
  const { nums, k } = inputData.case3;
  const result = containsNearbyDuplicate(nums, k);
  expect(result).toEqual(expected.case3);
});
