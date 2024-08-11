import { constructListNode } from '../../src/models/listNode-v1';

export const inputData = {
  case1: constructListNode([3, 2, 0, -4]),
  case2: constructListNode([1, 2]),
  case3: constructListNode([1]),
};

export const expected = {
  case1: true,
  case2: true,
  case3: false,
};
