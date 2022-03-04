import isInterleave from '../../src/rules/isInterleave';
import { inputData, expected } from '../data/isInterleaveData';

test('isInterleave should return the distance for case1', () => {
  const { s1, s2, s3 } = inputData.case1;
  const result = isInterleave(s1, s2, s3);
  expect(result).toEqual(expected.case1);
});

test('isInterleave should return the distance for case2', () => {
  const { s1, s2, s3 } = inputData.case2;
  const result = isInterleave(s1, s2, s3);
  expect(result).toEqual(expected.case2);
});

test('isInterleave should return the distance for case3', () => {
  const { s1, s2, s3 } = inputData.case3;
  const result = isInterleave(s1, s2, s3);
  expect(result).toEqual(expected.case3);
});
