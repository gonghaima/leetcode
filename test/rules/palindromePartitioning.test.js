import palindromePartitioning from '../../src/rules/palindromePartitioning';
import { inputData, expected } from '../data/palindromePartitioningData';

test('palindromePartitioning should return the expected result for case1', () => {
  const result = palindromePartitioning(inputData.case1);
  expect(result.sort()).toEqual(expected.case1.sort());
  // expect(result.sort()[0].sort()).toEqual(expected.case1.sort()[0].sort());

});

test('palindromePartitioning should return the expected result for case2', () => {
  const result = palindromePartitioning(inputData.case2);
  expect(result.sort()).toEqual(expected.case2.sort());
});
