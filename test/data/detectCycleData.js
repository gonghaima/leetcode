import { constructListNode } from '../../src/models/listNode-v1';

export const inputData = {
  case1: { head: constructListNode([3, 2, 0, -4]), pos: 1 },
  case2: { head: constructListNode([1, 2]), pos: 0 },
  case3: { head: constructListNode([1]), pos: -1 },
};

export const expected = {
  case1: 'tail connects to node index 1',
  case2: 'tail connects to node index 0',
  case3: 'no cycle',
};
