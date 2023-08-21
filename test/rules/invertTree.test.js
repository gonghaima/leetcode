import invertTree from '../../src/rules/invertTree';
import { inputData, expected } from '../data/invertTreeData';

test('invertTree should return correct result for case1', () => {
  const result = invertTree(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('invertTree should return correct result for case2', () => {
  const result = invertTree(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('invertTree should return correct result for case3', () => {
  const result = invertTree(inputData.case3);
  expect(result).toEqual(expected.case3);
});
