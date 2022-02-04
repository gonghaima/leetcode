import deleteOperationforTwoStrings from '../../src/rules/deleteOperationforTwoStrings';

import { inputData, expected } from '../data/deleteOperationforTwoStringsData';

test('deleteOperationforTwoStrings should return expected result for case1', () => {
  const { word1, word2 } = inputData.case1;
  const result = deleteOperationforTwoStrings(word1, word2);
  expect(result).toEqual(expected.case1);
});

test('deleteOperationforTwoStrings should return expected result for case2', () => {
  const { word1, word2 } = inputData.case2;
  const result = deleteOperationforTwoStrings(word1, word2);
  expect(result).toEqual(expected.case2);
});
