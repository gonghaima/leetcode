import {
  s1l1Two,
  s1l2Five,
  s2l1One1,
  s2l2Zero,
  s3l1Zero,
  s3l2Seven,
  s4l1Nine,
  s4l2One
} from '../mock/addTwoNumbersData';

import addTwoNumbers from '../../src/rules/addTwoNumbers/addTwoNumbers';

test('addTwoNumbers rule should return total of the two linked list join', () => {
  const result = addTwoNumbers(s1l1Two, s1l2Five);
  expect(result[0]).toBe(7);
  expect(result[1]).toBe(0);
  expect(result[2]).toBe(8);
});

test('addTwoNumbers rule [1,8] and [0] should return [1,8]', () => {
  const result = addTwoNumbers(s2l1One1, s2l2Zero);
  expect(result[0]).toBe(1);
  expect(result[1]).toBe(8);
});

test('addTwoNumbers rule [0] and [7 ,3] should return [7,3]', () => {
  const result = addTwoNumbers(s3l1Zero, s3l2Seven);
  expect(result[0]).toBe(7);
  expect(result[1]).toBe(3);
});

test('addTwoNumbers rule [9, 8] and [1] should return [0,9]', () => {
  const result = addTwoNumbers(s4l1Nine, s4l2One);
  expect(result[0]).toBe(0);
  expect(result[1]).toBe(9);
});
