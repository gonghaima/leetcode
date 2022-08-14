import decodeAtIndex from '../../src/rules/decodeAtIndex';

import { inputData, expected } from '../data/decodeAtIndexData';

test('decodeAtIndex should return expected result for case1', () => {
  const { s, k } = inputData.case1;
  const result = decodeAtIndex(s, k);
  expect(result).toEqual(expected.case1);
});

test('decodeAtIndex should return expected result for case2', () => {
  const { s, k } = inputData.case2;
  const result = decodeAtIndex(s, k);
  expect(result).toEqual(expected.case2);
});

test('decodeAtIndex should return expected result for case3', () => {
  const { s, k } = inputData.case3;
  const result = decodeAtIndex(s, k);
  expect(result).toEqual(expected.case3);
});
