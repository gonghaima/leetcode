import { constructListNode } from '../../src/models/listNode-v1';

export const inputData = {
  case1: constructListNode([1, 2, 3, 4]),
  case2: constructListNode([]),
  case3: constructListNode([1]),
};

export const expected = {
  case1: constructListNode([2, 1, 4, 3]),
  case2: constructListNode([]),
  case3: constructListNode([1]),
};
