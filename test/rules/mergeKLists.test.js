import mergeKLists from '../../src/rules/mergeKLists';
import { inputData, expected } from '../data/mergeKListsData';

test('mergeKLists should return expected result from case1', () => {
  const result = mergeKLists(inputData.case1);
  debugger;
  expect(result).toEqual(expected.case1);
});

// test('mergeKLists should return expected result from case2', () => {
//   const result = mergeKLists(inputData.case2);
//   expect(result).toEqual(expected.case2);
// });

// test('mergeKLists should return expected result from case3', () => {
//   const result = mergeKLists(inputData.case3);
//   expect(result).toEqual(expected.case3);
// });
