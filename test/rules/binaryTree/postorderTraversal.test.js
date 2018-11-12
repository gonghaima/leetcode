
import {postorderTraversal} from '../../../src/rules/binaryTree/postorderTraversal';
import {
  inputData,
  expected
} from '../../mock/binaryTree/postorderTraversalData';

test('postorderTraversal should return expected value', () => {
  const actual = postorderTraversal(inputData.case1);
  expect(actual[0]).toBe(expected.case1[0]);
  expect(actual[1]).toBe(expected.case1[1]);
  expect(actual[2]).toBe(expected.case1[2]);
});
