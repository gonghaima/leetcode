import partitionLabels from '../../src/rules/partitionLabels';
import { inputData, expected } from '../data/partitionLabelsData';

test('partitionLabels should return the distance for case1', () => {
  const result = partitionLabels(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('partitionLabels should return the distance for case2', () => {
  const result = partitionLabels(inputData.case2);
  expect(result).toEqual(expected.case2);
});
