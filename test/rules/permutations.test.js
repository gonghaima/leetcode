import permutations from '../../src/rules/permutations';
import { inputData, expected } from '../data/permutationsData';
test('permutations function should increase one from last item from cases data', () => {
  // expect(permutations(inputData.case1.sort())).toEqual(expected.case1.sort());
  expect(permutations(inputData.case2.sort())).toEqual(expected.case2.sort());
  expect(permutations(inputData.case3.sort())).toEqual(expected.case3.sort());
});
