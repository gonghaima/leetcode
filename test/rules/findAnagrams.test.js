import findAnagrams from '../../src/rules/findAnagrams';
import { inputData, expected } from '../data/findAnagramsData';

test('findAnagrams can return expected result with test case 1', () => {
  const { s, p } = inputData.case1;
  const result = findAnagrams(s, p);
  expect(result).toEqual(expected.case1);
});

test('findAnagrams can return expected result with test case 2', () => {
  const { s, p } = inputData.case2;
  const result = findAnagrams(s, p);
  expect(result).toEqual(expected.case2);
});
