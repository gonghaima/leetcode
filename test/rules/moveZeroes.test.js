import moveZeroes from '../../src/rules/moveZeroes';
import { inputData, expected } from '../data/moveZeroesData';

test('moveZeroes should return expected result for case1', () => {
  const result = moveZeroes(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('moveZeroes should return expected result for case2', () => {
  const result = moveZeroes(inputData.case2);
  expect(result).toEqual(expected.case2);
});
