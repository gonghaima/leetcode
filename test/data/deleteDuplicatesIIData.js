import { constructListNode } from '../../src/models/listNode-v1';

export const inputData = {
  case1: constructListNode([1, 2, 3, 3, 4, 4, 5]),
  case2: constructListNode([1, 1, 1, 2, 3]),
};

export const expected = {
  case1: constructListNode([1, 2, 5]),
  case2: constructListNode([2, 3]),
};
