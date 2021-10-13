import TreeNode from '../../../src/models/treeNode';
import { inorderTraversal } from '../../../src/rules/binaryTree/inorderTraversal';
import {
  inputData,
  expected
} from '../../data/binaryTree/inorderTraversalData';

test('inorderTraversal should return expected value in case 1', () => {
  const actual = inorderTraversal(inputData.case1);
  expect(actual[0]).toBe(expected.case1[0]);
  expect(actual[1]).toBe(expected.case1[1]);
  expect(actual[2]).toBe(expected.case1[2]);
});

test('inorderTraversal should return expected value in case 2', () => {
  const actual = inorderTraversal(inputData.case2);
  expect(actual[0]).toBe(expected.case2[0]);
  expect(actual[1]).toBe(expected.case2[1]);
  expect(actual[2]).toBe(expected.case2[2]);
});
