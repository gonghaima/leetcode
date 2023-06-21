import setZeroes from '../../src/rules/setZeroes';
import { inputData, expected } from '../data/setZeroesData';

test('setZeroes should return expected result for case1', () => {
  const result = setZeroes(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('setZeroes should return expected result for case2', () => {
  const result = setZeroes(inputData.case2);
  expect(result).toEqual(expected.case2);
});
