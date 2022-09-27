import fourSumCount from '../../src/rules/fourSumCount';
import { inputData, expected } from '../data/fourSumCountData';

test('fourSumCount should return correct answer - case 1', () => {
  const { nums1, nums2, nums3, nums4 } = inputData.case1;
  const result = fourSumCount(nums1, nums2, nums3, nums4);
  expect(result).toEqual(expected.case1);
});

test('fourSumCount should return correct answer - case 2', () => {
  const { nums1, nums2, nums3, nums4 } = inputData.case2;
  const result = fourSumCount(nums1, nums2, nums3, nums4);
  expect(result).toEqual(expected.case2);
});
