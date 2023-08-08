import { constructListNode } from '../../src/models/listNode-v1';

export const inputData = {
  case1: constructListNode([1, 2, 3, 4, 5]),
  case2: constructListNode([1, 2]),
  case3: constructListNode([]),
};

export const expected = {
  case1: constructListNode([5, 4, 3, 2, 1]),
  case2: constructListNode([2, 1]),
  case3: constructListNode([]),
};
