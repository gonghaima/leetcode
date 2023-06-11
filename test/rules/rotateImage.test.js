import rotateImage from '../../src/rules/rotateImage';
import { inputData, expected } from '../data/rotateImageData';

test('rotateImage should return expected result for case1', () => {
  const result = rotateImage(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('rotateImage should return expected result for case2', () => {
  const result = rotateImage(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('rotateImage should return expected result for case3', () => {
  const result = rotateImage(inputData.case3);
  expect(result).toEqual(expected.case3);
});
