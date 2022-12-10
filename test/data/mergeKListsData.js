function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const list1_1 = new ListNode();
list1_1.val = 1;
const list1_2 = new ListNode();
list1_2.val = 4;
const list1_3 = new ListNode();
list1_3.val = 5;
list1_1.next = list1_2;
list1_2.next = list1_3;

const list2_1 = new ListNode();
list2_1.val = 1;
const list2_2 = new ListNode();
list2_2.val = 3;
const list2_3 = new ListNode();
list2_3.val = 4;
list2_1.next = list2_2;
list2_2.next = list2_3;

const list3_1 = new ListNode();
list3_1.val = 2;
const list3_2 = new ListNode();
list3_2.val = 6;
list3_1.next = list3_2;

const expected_case_1 = new ListNode();
expected_case_1.val = 1;
const expected_case_2 = new ListNode();
expected_case_2.val = 1;
const expected_case_3 = new ListNode();
expected_case_3.val = 2;
const expected_case_4 = new ListNode();
expected_case_4.val = 3;
const expected_case_5 = new ListNode();
expected_case_5.val = 4;
const expected_case_6 = new ListNode();
expected_case_6.val = 4;
const expected_case_7 = new ListNode();
expected_case_7.val = 5;
const expected_case_8 = new ListNode();
expected_case_8.val = 6;
expected_case_1.next = expected_case_2;
expected_case_2.next = expected_case_3;
expected_case_3.next = expected_case_4;
expected_case_4.next = expected_case_5;
expected_case_5.next = expected_case_6;
expected_case_6.next = expected_case_7;
expected_case_7.next = expected_case_8;

export const inputData = {
  case1: [list1_1, list2_1, list3_1],
  case2: [],
  case3: [[]],
};

export const expected = {
  case1: expected_case_1,
  case2: [],
  case3: [],
};
