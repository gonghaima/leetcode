import ListNode from "../../models/listNode";
export const mergeTwoSortedNodes = (l1, l2) => {
  let rootNode = new ListNode(null);

  //handling null case
  if (!l1 && !l2) return null;

  //handle one of the null case
  if (l1 && !l2) {
    rootNode.val = l1.val;
    l1 = l1.next;
  }
  if (!l1 && l2) {
    rootNode.val = l2.val;
    l2 = l2.next;
  }

  //when root not set
  // and l1 and l2 has valid value
  if (l1 && (l1.val || l1.val === 0) && (l2 && (l2.val || l2.val === 0))) {
    if (l1.val < l2.val) {
      rootNode.val = l1.val;
      l1 = l1.next;
    } else {
      rootNode.val = l2.val;
      l2 = l2.next;
    }
  }

  let originalNode = rootNode;

  while ((l1 && (l1.val || l1.val === 0)) || (l2 && (l2.val || l2.val === 0))) {
    while (l2 && (l2.val || l2.val === 0)) {
      if (l1 && l2 && l1.val < l2.val) {
        originalNode.next = new ListNode(l1.val);
        originalNode = originalNode.next;
        l1 = l1.next;
      } else {
        originalNode.next = new ListNode(l2.val);
        originalNode = originalNode.next;
        l2 = l2.next;
      }
      const b = "";
    }
    if (l1 && (l1.val || l1.val === 0)) {
      originalNode.next = new ListNode(l1.val);
      originalNode = originalNode.next;
      l1 = l1.next;
    }

    const t = "";
  }

  return rootNode;
};

//Todo - 0  case
// different length case
