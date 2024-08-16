import {
  s1l1Two,
  s1l2Five,
  s2l1One1,
  s2l2Zero,
  s3l1Zero,
  s3l2Seven,
  s4l1Nine,
  s4l2One,
} from '../data/addTwoNumbersData';

import addTwoNumbers from '../../src/rules/addTwoNumbers';

test('addTwoNumbers rule should return total of the two linked list join', () => {
  const result = addTwoNumbers(s1l1Two, s1l2Five);

  let idx = 0;
  let currentNode = result;
  while (currentNode.val) {
    expect(currentNode.val).toBe([7, 0, 8][idx]);
    currentNode = currentNode.next;
    idx += 1;
  }
});

test('addTwoNumbers rule [1,8] and [0] should return [1,8]', () => {
  const result = addTwoNumbers(s2l1One1, s2l2Zero);
  let idx = 0;
  let currentNode = result;
  while (currentNode?.val) {
    expect(currentNode.val).toBe([1, 8][idx]);
    currentNode = currentNode.next;
    idx += 1;
  }
});

test('addTwoNumbers rule [0] and [7 ,3] should return [7,3]', () => {
  const result = addTwoNumbers(s3l1Zero, s3l2Seven);
  let idx = 0;
  let currentNode = result;
  while (currentNode?.val) {
    expect(currentNode.val).toBe([7, 3][idx]);
    currentNode = currentNode.next;
    idx += 1;
  }
});

test('addTwoNumbers rule [9, 8] and [1] should return [0,9]', () => {
  const result = addTwoNumbers(s4l1Nine, s4l2One);
  let idx = 0;
  let currentNode = result;
  while (currentNode?.val) {
    expect(currentNode.val).toBe([0, 9][idx]);
    currentNode = currentNode.next;
    idx += 1;
  }
});
