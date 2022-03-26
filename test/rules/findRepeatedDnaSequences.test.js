import findRepeatedDnaSequences from '../../src/rules/findRepeatedDnaSequences';
import { inputData, expected } from '../data/findRepeatedDnaSequencesData';

test('findRepeatedDnaSequences should return expected result for case1', () => {
  const result = findRepeatedDnaSequences(
    inputData.case1.numCourses,
    inputData.case1.prerequisites
  );
  expect(result).toEqual(expected.case1);
});

test('findRepeatedDnaSequences should return expected result for case2', () => {
  const result = findRepeatedDnaSequences(
    inputData.case2.numCourses,
    inputData.case2.prerequisites
  );
  expect(result.sort()).toEqual(expected.case2.sort());
});
