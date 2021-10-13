import findAndReplacePattern from '../../src/rules/findAndReplacePattern';
import { inputData, expected } from '../data/findAndReplacePatternData';

test('findAndReplacePattern can return an array with matched pattern', () => {
  const result = findAndReplacePattern(
    inputData.case1.words,
    inputData.case1.parttern
  );
  expect(result).toEqual(expected.case1);
});
