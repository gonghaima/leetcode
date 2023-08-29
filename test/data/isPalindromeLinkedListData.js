import { constructListNode } from '../../src/models/listNode-v1';

export const inputData = {
  case1: constructListNode([1, 2, 2, 1]),
  case2: constructListNode([1, 2]),
};

export const expected = {
  case1: true,
  case2: false,
};
