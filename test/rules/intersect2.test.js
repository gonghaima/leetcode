import intersect from '../../src/rules/intersect';
import { inputData, expected } from '../data/intersect2Data';

test('intersect should return correct result for case1', () => {
  const { nums1, nums2 } = inputData.case1;
  const result = intersect(nums1, nums2);
  expect(result).toEqual(expected.case1);
});

test('intersect should return correct result for case2', () => {
  const { nums1, nums2 } = inputData.case2;
  const result = intersect(nums1, nums2);
  expect(result).toEqual(expected.case2);
});
