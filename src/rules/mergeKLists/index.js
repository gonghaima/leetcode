/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let track = {};
  let result = [];
  lists.map((list, idx) => {
    track[idx] = [list.length, 0];
  });

  const end = (track) => {
    let end = true;
    const keys = Object.keys(track);
    for (let i = 0; end && i < keys.length; i++) {
      const key = keys[i];
      const [totalLength, currentIdx] = track[key];
      if (currentIdx <= totalLength - 1) return false;
    }
    return end;
  };

  while (!end(track)) {
    let lowest;
    //find lowest
    // update currentIdx
    for (let idx = 0; idx < Object.keys(track).length; idx++) {
      const [totalLength, currentIdx] = track[idx];
      if (!lowest) {
        if (totalLength === currentIdx) continue;
        lowest = [idx, totalLength, currentIdx];
      } else if (lists[lowest[0]][lowest[2]] > lists[idx][track[idx][1]]) {
        lowest = [idx, totalLength, currentIdx];
      }
    }

    const [lowestIdx, totalLength, currentIdx] = lowest;
    result.push(lists[lowestIdx][currentIdx]);
    const newData = [track[lowestIdx][0], ++currentIdx];
    lowest = null;
    track[lowestIdx] = newData;
  }
  return result;
};
export default mergeKLists;
