import mergeTwoLists from '../../src/rules/mergeTwoSortedLists';
import { inputData, expected } from '../data/mergeTwoSortedListsData';

test('the mergeTwoSortedListsData function  will merge first case', () => {
  const { list1, list2 } = inputData.case1;
  const result = mergeTwoLists(list1, list2);

  let idx = 0;
  let currentNode = result;
  while (currentNode?.val) {
    expect(currentNode.val).toBe([1, 1, 2, 3, 4, 4][idx]);
    currentNode = currentNode.next;
    idx += 1;
  }
});
