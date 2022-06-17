import minimumLengthEncoding from '../../src/rules/minimumLengthEncoding';

import { inputData, expected } from '../data/minimumLengthEncodingData';

test('minimumLengthEncoding should return expected result for case1', () => {
  const result = minimumLengthEncoding(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('minimumLengthEncoding should return expected result for case2', () => {
  const result = minimumLengthEncoding(inputData.case2);
  expect(result).toEqual(expected.case2);
});
