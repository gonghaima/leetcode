import uniquePathsII from '../../src/rules/uniquePathsII';
import { inputData, expected } from '../data/uniquePathsIIData';

test('uniquePathsII should return correct path number for case 1', () => {
  const result = uniquePathsII(inputData.case1);
  expect(result).toBe(expected.case1);
});

test('uniquePathsII should return correct path number for case 2', () => {
  const result = uniquePathsII(inputData.case2);
  expect(result).toBe(expected.case2);
});
