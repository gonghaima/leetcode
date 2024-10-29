import { constructListNode } from '../../src/models/listNode-v1';

export const inputData = {
  case1: { head: constructListNode([1, 4, 3, 2, 5, 2]), x: 3 },
  case2: { head: constructListNode([2, 1]), x: 2 },
};

export const expected = {
  case1: constructListNode([1, 2, 2, 4, 3, 5]),
  case2: constructListNode([1, 2]),
};
