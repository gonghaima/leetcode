import { constructListNode } from '../../src/models/listNode-v1';

export const inputData = {
  case1: { head: constructListNode([1, 2, 3, 4, 5]), k: 2 },
  case2: { head: constructListNode([0, 1, 2]), k: 4 },
};

export const expected = {
  case1: constructListNode([4, 5, 1, 2, 3]),
  case2: constructListNode([2, 0, 1]),
};
