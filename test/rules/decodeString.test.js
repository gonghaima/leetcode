import decodeString from '../../src/rules/decodeString';

import { inputData, expected } from '../data/decodeStringData';

test('decodeString should return expected result for case1', () => {
  const result = decodeString(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('decodeString should return expected result for case2', () => {
  const result = decodeString(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('decodeString should return expected result for case3', () => {
  const result = decodeString(inputData.case3);
  expect(result).toEqual(expected.case3);
});
