import hasPathSum from '../../../src/rules/binaryTree/hasPathSum';
import { inputData, expected } from '../../mock/binaryTree/hasPathSumData';

test('hasPathSum should return true, for case1', () => {
  const actual = hasPathSum(inputData.case1.root, inputData.case1.sum);
  expect(actual).toBe(expected.case1);
});

test('hasPathSum should return false, for case2', () => {
  const actual = hasPathSum(inputData.case2.root, inputData.case2.sum);
  expect(actual).toBe(expected.case2);
});

test('hasPathSum should return false, for case3', () => {
  const actual = hasPathSum(inputData.case3.root, inputData.case3.sum);
  expect(actual).toBe(expected.case3);
});

test('hasPathSum should return false, for case4', () => {
  const actual = hasPathSum(inputData.case4.root, inputData.case4.sum);
  expect(actual).toBe(expected.case4);
});

test('hasPathSum should return false, for case5', () => {
  const actual = hasPathSum(inputData.case5.root, inputData.case5.sum);
  expect(actual).toBe(expected.case5);
});

test('hasPathSum should return false, for case6', () => {
  const actual = hasPathSum(inputData.case6.root, inputData.case6.sum);
  expect(actual).toBe(expected.case6);
});

test('hasPathSum should return false, for case7', () => {
  const actual = hasPathSum(inputData.case7.root, inputData.case7.sum);
  expect(actual).toBe(expected.case7);
});
