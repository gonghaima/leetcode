import { constructListNode } from '../../src/models/listNode-v1';

export const inputData = {
  case1: { head: constructListNode([1, 2, 3, 4, 5]), left: 2, right: 4 },
  case2: { head: constructListNode([5]), left: 1, right: 1 },
};

export const expected = {
  case1: constructListNode([1, 4, 3, 2, 5]),
  case2: constructListNode([5]),
};
//case1: {head: constructListNode([1, 2, 3, 4, 5]),  left:2, right:4},
