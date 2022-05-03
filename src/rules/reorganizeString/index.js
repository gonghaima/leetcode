// https://leetcode.com/problems/reorganize-string/discuss/719106/JSJavaScript-MaxHeap-implementation-long-but-should-be-clear

// max heap

/***************************************************************************************************
 * Runtime: 137 ms, faster than 14.01% of JavaScript online submissions for Reorganize String.     *
 * Memory Usage: 46.4 MB, less than 27.36% of JavaScript online submissions for Reorganize String. *
 ***************************************************************************************************/

function countChars(S) {
  const map = {};

  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    map[char] = map[char] ? map[char] + 1 : 1;
  }

  return map;
}
// PriorityQueue impl MaxHeap
class MaxHeap {
  constructor(data = []) {
    this._data = data;
    this._heapify();
  }
  _getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  _getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  _hasLeftChild(parentIndex) {
    return this._getLeftChildIndex(parentIndex) < this._data.length;
  }
  _hasRightChild(parentIndex) {
    return this._getRightChildIndex(parentIndex) < this._data.length;
  }
  _hasParent(index) {
    return this._getParentIndex(index) >= 0;
  }
  _getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  _swap(from, to) {
    [this._data[from], this._data[to]] = [this._data[to], this._data[from]];
  }
  _swim(index) {
    let parentIndex = this._getParentIndex(index);

    while (
      this._hasParent(index) &&
      this._data[index][1] > this._data[parentIndex][1]
    ) {
      this._swap(index, parentIndex);

      index = parentIndex;
      parentIndex = this._getParentIndex(index);
    }
  }
  add(val) {
    this._data.push(val);
    let lastIndex = this._data.length - 1;
    this._swim(lastIndex);
  }
  poll() {
    if (this.isEmpty()) {
      return null;
    }
    this._swap(0, this._data.length - 1);

    const deleted = this._data.pop();

    this._sink(0);

    return deleted;
  }
  _sink(parentIndex) {
    while (this._hasLeftChild(parentIndex)) {
      let biggestElementIndex = this._getLeftChildIndex(parentIndex);

      if (
        this._hasRightChild(parentIndex) &&
        this._data[this._getLeftChildIndex(parentIndex)][1] <
          this._data[this._getRightChildIndex(parentIndex)][1]
      ) {
        biggestElementIndex = this._getRightChildIndex(parentIndex);
      }

      if (this._data[parentIndex][1] >= this._data[biggestElementIndex][1]) {
        break;
      } else {
        this._swap(parentIndex, biggestElementIndex);
      }

      parentIndex = biggestElementIndex;
    }
  }
  _heapify() {
    for (let i = this._data.length - 1; i >= 0; i--) {
      this._sink(i);
    }
  }
  isEmpty() {
    return this._data.length === 0;
  }
  size() {
    return this._data.length;
  }
}
// R: O(NlogK)
// S: O(n)
var reorganizeString = function(S) {
  if (S.length === 1) {
    return S;
  }

  const map = countChars(S);
  // create Tuples from map
  const tupleCounts = Object.entries(map);
  // initialize maxHeap
  const maxHeap = new MaxHeap(tupleCounts);
  // resulting array, that will become string
  const result = [];
  // until one char gonna left in MaxHeap
  while (maxHeap.size() > 1) {
    // take tuple with maxCount in S
    let current = maxHeap.poll();
    // take tuple with next maxCount in S
    let next = maxHeap.poll();
    // push it to resulting array
    result.push(current[0]);
    result.push(next[0]);
    // decrement values as far as we've used them
    current[1]--;
    next[1]--;
    // if there are values left in tuple - push to maxHeap again
    if (current[1] > 0) {
      maxHeap.add(current);
    }
    if (next[1] > 0) {
      maxHeap.add(next);
    }
  }
  // if maxHeap is not Empty
  if (!maxHeap.isEmpty()) {
    const last = maxHeap.poll();
    // check if last char count is bigger then 1 - it means chars cant be reorganized
    if (last[1] > 1) {
      return '';
    }
    result.push(last[0]);
  }

  return result.join('');
};

export default reorganizeString;
