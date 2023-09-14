import decodeString from '../../src/rules/decodeString';

import { inputData, expected } from '../data/decodeStringData';

test('decodeString should return expected result for case1', () => {
  const { s, k } = inputData.case1;
  const result = decodeString(s, k);
  expect(result).toEqual(expected.case1);
});

test('decodeString should return expected result for case2', () => {
  const { s, k } = inputData.case2;
  const result = decodeString(s, k);
  expect(result).toEqual(expected.case2);
});

test('decodeString should return expected result for case3', () => {
  const { s, k } = inputData.case3;
  const result = decodeString(s, k);
  expect(result).toEqual(expected.case3);
});
