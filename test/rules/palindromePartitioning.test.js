import palindromePartitioning from '../../src/rules/palindromePartitioning';
import { inputData, expected } from '../data/palindromePartitioningData';

test('palindromePartitioning should return the expected result for case1', () => {
  const result = palindromePartitioning(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('palindromePartitioning should return the expected result for case2', () => {
  const result = palindromePartitioning(inputData.case2);
  expect(result).toEqual(expected.case2);
});
