import pushDominoes from '../../src/rules/pushDominoes';
import { inputData, expected } from '../data/pushDominoesData';

// test('pushDominoes should return the distance for case1', () => {
//   const result = pushDominoes(inputData.case1);
//   expect(result).toEqual(expected.case1);
// });

test('pushDominoes should return the distance for case2', () => {
  const result = pushDominoes(inputData.case2);
  expect(result).toEqual(expected.case2);
});
