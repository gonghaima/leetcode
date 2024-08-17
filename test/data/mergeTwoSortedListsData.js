import { createLinkedListWithCycle } from '../../src/models/listNode-v2';

export const inputData = {
  case1: {
    list1: createLinkedListWithCycle([1, 2, 4], -1),
    list2: createLinkedListWithCycle([1, 3, 4], -1),
  },
};

export const expected = {
  case1: createLinkedListWithCycle([1, 1, 2, 3, 4, 4], -1),
};
