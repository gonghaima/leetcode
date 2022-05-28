import numMatchingSubseq from '../../src/rules/numMatchingSubseq';
import { inputData, expected } from '../data/numMatchingSubseqData';

test('numMatchingSubseq should return expected result for case1', () => {
  const { s, words } = inputData.case1;
  const result = numMatchingSubseq(s, words);
  expect(result).toEqual(expected.case1);
});

test('numMatchingSubseq should return expected result for case2', () => {
  const { s, words } = inputData.case2;
  const result = numMatchingSubseq(s, words);
  expect(result).toEqual(expected.case2);
});
