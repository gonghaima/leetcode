import canConstruct from '../../src/rules/canConstruct';
import { inputData, expected } from '../data/canConstructData';

test('canConstruct should return expected result for case1', () => {
  const { ransomNote, magazine } = inputData.case1;
  const result = canConstruct(ransomNote, magazine);
  expect(result).toEqual(expected.case1);
});

test('canConstruct should return expected result for case2', () => {
  const { ransomNote, magazine } = inputData.case2;
  const result = canConstruct(ransomNote, magazine);
  expect(result).toEqual(expected.case2);
});

test('canConstruct should return expected result for case3', () => {
  const { ransomNote, magazine } = inputData.case3;
  const result = canConstruct(ransomNote, magazine);
  expect(result).toEqual(expected.case3);
});
