import groupAnagrams from '../../src/rules/groupAnagrams';
import { inputData, expected } from '../data/groupAnagramsData';

test('groupAnagrams should return correct result for case1', () => {
  const result = groupAnagrams(inputData.case1);
  expect(result.flatMap((c) => c.sort()).sort()).toEqual(
    expected.case1.flatMap((c) => c.sort()).sort()
  );
});

test('groupAnagrams should return correct result for case2', () => {
  const result = groupAnagrams(inputData.case2);
  expect(result.sort()).toEqual(expected.case2.sort());
});

test('groupAnagrams should return correct result for case3', () => {
  const result = groupAnagrams(inputData.case3);
  expect(result.sort()).toEqual(expected.case3.sort());
});
