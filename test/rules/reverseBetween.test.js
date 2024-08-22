import reverseBetween from '../../src/rules/reverseBetween';
import { inputData, expected } from '../data/reverseBetweenData';

test('reverseBetween should return correct result for case1', () => {
  const { head, left, right } = inputData.case1;
  const result = reverseBetween(head, left, right);
  let idx = 0;
  let currentNode = result;
  while (currentNode?.val) {
    expect(currentNode.val).toBe([1, 4, 3, 2, 5][idx]);
    currentNode = currentNode.next;
    idx += 1;
  }
});

test('reverseBetween should return correct result for case2', () => {
  const { head, left, right } = inputData.case2;
  const result = reverseBetween(head, left, right);
  let idx = 0;
  let currentNode = result;
  while (currentNode?.val) {
    expect(currentNode.val).toBe([5][idx]);
    currentNode = currentNode.next;
    idx += 1;
  }
});
