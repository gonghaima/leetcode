import diameterOfBinaryTree from '../../src/rules/diameterOfBinaryTree';

import { inputData, expected } from '../data/diameterOfBinaryTreeData';

test('diameterOfBinaryTree should return expected result for case1', () => {
  const result = diameterOfBinaryTree(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('diameterOfBinaryTree should return expected result for case2', () => {
  const result = diameterOfBinaryTree(inputData.case2);
  expect(result).toEqual(expected.case2);
});
