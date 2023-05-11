import removeNthFromEnd from '../../src/rules/removeNthFromEnd';
import { inputData, expected } from '../data/removeNthFromEndData';

test('removeNthFromEnd should return correct result for case1', () => {
  const { head, n } = inputData.case1;
  let result = removeNthFromEnd(head, n);
  let expectedResult = expected.case1;
  while (result?.val) {
    expect(result.val).toEqual(expectedResult.val);
    result = result.next ?? null;
    expectedResult = expectedResult.next ?? null;
  }
});

test('removeNthFromEnd should return correct result for case2', () => {
  const { head, n } = inputData.case2;
  let result = removeNthFromEnd(head, n);
  let expectedResult = expected.case2;
  while (result?.val) {
    expect(result.val).toEqual(expectedResult.val);
    result = result.next ?? null;
    expectedResult = expectedResult.next ?? null;
  }
});

test('removeNthFromEnd should return correct result for case3', () => {
  const { head, n } = inputData.case3;
  let result = removeNthFromEnd(head, n);
  let expectedResult = expected.case3;
  while (result?.val) {
    expect(result.val).toEqual(expectedResult.val);
    result = result.next ?? null;
    expectedResult = expectedResult.next ?? null;
  }
});
