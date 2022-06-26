import maskPII from '../../src/rules/maskPII';
import { inputData, expected } from '../data/maskPIIData';

test('maskPII should return expected result from case1', () => {
  const result = maskPII(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('maskPII should return expected result from case2', () => {
  const result = maskPII(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('maskPII should return expected result from case3', () => {
  const result = maskPII(inputData.case3);
  expect(result).toEqual(expected.case3);
});
