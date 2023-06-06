import permutations from '../../src/rules/permutations';
import { inputData, expected } from '../data/permutationsData';
test('permutations function should increase one from last item from cases data', () => {
  expect(permutations(inputData.case1)).toEqual(expected.case1);
  expect(permutations(inputData.case2)).toEqual(expected.case2);
  expect(permutations(inputData.case3)).toEqual(expected.case3);
});
