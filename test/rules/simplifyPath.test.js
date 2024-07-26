import simplifyPath from '../../src/rules/simplifyPath';
import { inputData, expected } from '../data/simplifyPathData';

test('simplifyPath should check a number for case 1', () => {
  const result = simplifyPath(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('simplifyPath should check a number for case 2', () => {
  const result = simplifyPath(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('simplifyPath should check a number for case 1', () => {
  const result = simplifyPath(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('simplifyPath should check a number for case 2', () => {
  const result = simplifyPath(inputData.case2);
  expect(result).toEqual(expected.case2);
});
