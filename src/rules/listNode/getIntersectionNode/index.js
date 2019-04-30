import ListNode from "../../../models/listNode";
export default (headA, headB) => {
  let result = null;
  let notFound = true;
  let ca = headA;
  let cb = headB;

  //if same from root
  if (ca === cb) {
    notFound = false;
    return ca;
  }
  if (ca && !ca.next) {
    while (cb && cb.next) {
      if (ca === cb.next) {
        result = ca;
        notFound = false;
        break;
      } else {
        cb = cb.next;
      }
    }
  }
  cb = headB;
  while (ca && ca.next && notFound) {
    if (ca.next === cb) {
      result = cb;
      notFound = false;
      break;
    }
    while (cb && cb.next && notFound) {
      if (cb.next === ca) {
        result = ca;
        notFound = false;
        break;
      }
      if (ca.next === cb.next) {
        result = ca.next;
        notFound = false;
        break;
      } else {
        cb = cb.next;
      }
    }
    ca = ca.next;
    cb = headB;
  }
  return result;
};
