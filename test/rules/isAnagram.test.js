import isAnagram from '../../src/rules/isAnagram';
import { inputData, expected } from '../data/isAnagramData';

test('isAnagram should return the distance for case1', () => {
  const { s, t } = inputData.case1;
  const result = isAnagram(s, t);
  expect(result).toEqual(expected.case1);
});

test('isAnagram should return the distance for case2', () => {
  const { s, t } = inputData.case2;
  const result = isAnagram(s, t);
  expect(result).toEqual(expected.case2);
});
