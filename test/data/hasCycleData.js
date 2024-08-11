import { createLinkedListWithCycle } from '../../src/models/listNode-v2';

export const inputData = {
  case1: createLinkedListWithCycle([3, 2, 0, -4], 1),
  case2: createLinkedListWithCycle([1, 2], 0),
  case3: createLinkedListWithCycle([1]),
};

export const expected = {
  case1: true,
  case2: true,
  case3: false,
};
