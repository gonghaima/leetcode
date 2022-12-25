import lowestCommonAncestor from '../../src/rules/lowestCommonAncestor';
import { inputData, expected } from '../data/lowestCommonAncestorData';

test('lowestCommonAncestor should return expected result for case1', () => {
  const { root, p, q } = inputData.case1;
  const result = lowestCommonAncestor(root, p, q);
  expect(result).toEqual(expected.case1);
});
test('lowestCommonAncestor should return expected result for case2', () => {
  const { root, p, q } = inputData.case2;
  const result = lowestCommonAncestor(root, p, q);
  expect(result).toEqual(expected.case2);
});

test('lowestCommonAncestor should return expected result for case3', () => {
  const { root, p, q } = inputData.case3;
  const result = lowestCommonAncestor(root, p, q);
  expect(result).toEqual(expected.case3);
});
