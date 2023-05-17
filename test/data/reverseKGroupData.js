import { constructListNode } from '../../src/models/listNode-v1';

export const inputData = {
  case1: { head: constructListNode([1, 2, 3, 4, 5]), k: 2 },
  case2: { head: constructListNode([1, 2, 3, 4, 5]), k: 3 },
};

export const expected = {
  case1: constructListNode([2, 1, 4, 3, 5]),
  case2: constructListNode([3, 2, 1, 4, 5]),
};
