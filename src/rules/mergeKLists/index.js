/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function merge (left, right) {
    if (!left) {
        return right;
    } else if (!right) {
        return left;
    } else if (left.val < right.val){
        left.next = merge(left.next, right);
        return left;
    } else {
        right.next = merge(left, right.next);
        return right;
    }
}


function helper(lists, start, end) {
    if (start === end) {
        return lists[start];
    } else if (start < end) {
        const mid = parseInt((start + end) / 2);
        const left = helper(lists, start, mid);
        const right = helper(lists, mid + 1, end);
        return merge(left, right);
    } else {
        return null;
    }
    
}

var mergeKLists = function(lists) {
    return helper(lists, 0, lists.length - 1);
};

export default mergeKLists;
