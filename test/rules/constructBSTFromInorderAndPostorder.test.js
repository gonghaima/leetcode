import constructBSTFromInorderAndPostorder from '../../src/rules/constructBSTFromInorderAndPostorder';
import { inputData, expected } from '../data/constructBSTFromInorderAndPostorderData';

test('constructBSTFromInorderAndPostorder should return correct result for case1', () => {
  const { preorder, inorder } = inputData.case1;
  const result = constructBSTFromInorderAndPostorder(preorder, inorder);
  const ex = expected.case1;
  expect(result).toEqual(expected.case1);
});

test('constructBSTFromInorderAndPostorder should return correct result for case2', () => {
  const { preorder, inorder } = inputData.case2;
  const result = constructBSTFromInorderAndPostorder(preorder, inorder);
  expect(result).toEqual(expected.case2);
});
// test('constructBSTFromInorderAndPostorder should return correct result for case1', () => {
//   expect(1).toEqual(1);
// });
