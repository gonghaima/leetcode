import maxUncrossedLines from '../../src/rules/maxUncrossedLines/dp';
import { inputData, expected } from '../data/maxUncrossedLinesData';

test('maxUncrossedLines should return max profit from case1', () => {
  const { nums1, nums2 } = inputData.case1;
  const result = maxUncrossedLines(nums1, nums2);
  expect(result).toEqual(expected.case1);
});

test('maxUncrossedLines should return max profit from case2', () => {
  const { nums1, nums2 } = inputData.case2;
  const result = maxUncrossedLines(nums1, nums2);
  expect(result).toEqual(expected.case2);
});

test('maxUncrossedLines should return max profit from case3', () => {
  const { nums1, nums2 } = inputData.case3;
  const result = maxUncrossedLines(nums1, nums2);
  expect(result).toEqual(expected.case3);
});
