import zigzagConversion from '../../src/rules/zigzagConversion';
import { inputData, expected } from '../data/zigzagConversionData';

test('zigzagConversion should return expected result for case1', () => {
  const { s, numRows } = inputData.case1;
  const result = zigzagConversion(s, numRows);
  expect(result).toEqual(expected.case1);
});

test('zigzagConversion should return expected result for case2', () => {
  const { s, numRows } = inputData.case2;
  const result = zigzagConversion(s, numRows);
  expect(result).toEqual(expected.case2);
});

test('zigzagConversion should return expected result for case3', () => {
  const { s, numRows } = inputData.case3;
  const result = zigzagConversion(s, numRows);
  expect(result).toEqual(expected.case3);
});
