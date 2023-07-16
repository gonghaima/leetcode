import constructBST from '../../src/rules/constructBST';
import { inputData, expected } from '../data/constructBSTData';

test('constructBST should return correct result for case1', () => {
  const { preorder, inorder } = inputData.case1;
  const result = constructBST(preorder, inorder);
  expect(result).toEqual(expected.case1);
});

test('constructBST should return correct result for case2', () => {
  const { preorder, inorder } = inputData.case2;
  const result = constructBST(preorder, inorder);
  expect(result).toEqual(expected.case2);
});
