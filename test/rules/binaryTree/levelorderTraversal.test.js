
import {levelorderTraversal} from '../../../src/rules/binaryTree/levelorderTraversal';
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
