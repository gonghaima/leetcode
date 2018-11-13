import { levelorderTraversal } from '../../../src/rules/binaryTree/levelorderTraversal';
import {
  inputData,
  expected
} from '../../mock/binaryTree/levelorderTraversalData';

test('levelorderTraversal should return expected value', () => {
  const actual = levelorderTraversal(inputData.case1);
  expect(actual[0][0]).toBe(expected.case1[0][0]);
  expect(actual[1][0]).toBe(expected.case1[1][0]);
  expect(actual[1][1]).toBe(expected.case1[1][1]);
  expect(actual[2][0]).toBe(expected.case1[2][0]);
  expect(actual[2][1]).toBe(expected.case1[2][1]);
});

test('levelorderTraversal should return expected value in case2', () => {
  const actual2 = levelorderTraversal(inputData.case2);
  expect(actual2[0][0]).toBe(expected.case2[0][0]);
  expect(actual2[1][0]).toBe(expected.case2[1][0]);
  expect(actual2[1][1]).toBe(expected.case2[1][1]);
  expect(actual2[2][0]).toBe(expected.case2[2][0]);
  expect(actual2[2][1]).toBe(expected.case2[2][1]);
});
