import NestedIterator from '../../src/rules/NestedIterator';
import { inputData, expected } from '../data/NestedIteratorData';

test('NestedIterator should return expected result for case1', () => {
  const iterator = new NestedIterator(inputData.case1);
  let i = 0;
  while (iterator.hasNext) {
    expect(iterator.next()).toEqual(expected.case1[i]);
    i++;
  }
});

test('NestedIterator should return expected result for case2', () => {
  const iterator = new NestedIterator(inputData.case2);
  let i = 0;
  while (iterator.hasNext) {
    expect(iterator.next()).toEqual(expected.case2[i]);
    i++;
  }
});
