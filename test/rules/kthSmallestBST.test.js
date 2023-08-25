import kthSmallestBST from '../../src/rules/kthSmallestBST';

import { inputData, expected } from '../data/kthSmallestBSTData';

test('kthSmallestBST should return expected result for case1', () => {
  const { root, k } = inputData.case1;
  const result = kthSmallestBST(root, k);
  expect(result).toEqual(expected.case1);
});

test('kthSmallestBST should return expected result for case2', () => {
  const { root, k } = inputData.case2;
  const result = kthSmallestBST(root, k);
  expect(result).toEqual(expected.case2);
});
