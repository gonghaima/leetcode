import gameOfLife from '../../src/rules/gameOfLife';
import { inputData, expected } from '../data/gameOfLifeData';

test('gameOfLife should return correct result for case1', () => {
  const result = gameOfLife(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('gameOfLife should return correct result for case2', () => {
  const result = gameOfLife(inputData.case2);
  expect(result).toEqual(expected.case2);
});
