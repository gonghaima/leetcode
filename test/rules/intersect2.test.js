import intersect2 from '../../src/rules/intersect2';
import { inputData, expected } from '../data/intersect2Data';

test('intersect2 should return correct result for case1', () => {
  const { nums1, nums2 } = inputData.case1;
  const result = intersect2(nums1, nums2);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test('intersect2 should return correct result for case2', () => {
  const { nums1, nums2 } = inputData.case2;
  const result = intersect2(nums1, nums2);
  expect(result.sort()).toEqual(expected.case2.sort());
});
