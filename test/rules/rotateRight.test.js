import { isNodeEqual } from '../../src/models/listNode-v1';
import rotateRight from '../../src/rules/rotateRight';
import { inputData, expected } from '../data/rotateRightData';

test('rotateRight should return expected result for case1', () => {
  const result = rotateRight(inputData.case1);
  expect(isNodeEqual(result, expected.case1)).toEqual(true);
});

test('rotateRight should return expected result for case2', () => {
  const result = rotateRight(inputData.case2);
  expect(isNodeEqual(result, expected.case2)).toEqual(true);
});
