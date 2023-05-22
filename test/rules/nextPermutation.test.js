import nextPermutation from '../../src/rules/nextPermutation';

import { inputData, expected } from '../data/nextPermutationData';

test('nextPermutation should return expected result for case1', () => {
  const result = nextPermutation(inputData.case1);
  expect(result).toEqual(expected.case1);
});

// test('nextPermutation should return expected result for case2', () => {
//   const result = nextPermutation(inputData.case2);
//   expect(result).toEqual(expected.case2);
// });

test('nextPermutation should return expected result for case3', () => {
  const result = nextPermutation(inputData.case3);
  expect(result).toEqual(expected.case3);
});
