// min heap

/******************************************************************************************************
 * Runtime: 84 ms, faster than 84.74% of JavaScript online submissions for Top K Frequent Words.      *
 * Memory Usage: 46.2 MB, less than 59.06% of JavaScript online submissions for Top K Frequent Words. *
 ******************************************************************************************************/

// https://leetcode.com/problems/top-k-frequent-words/discuss/1786314/JS-O(nlogk)-time-O(n)-space

var topKFrequent = function(words, k) {
  // created a map from word to frequency
  const freqMap = new Map(); // SC: O(n)
  words.forEach((word) => {
    const count = !freqMap.has(word) ? 0 : freqMap.get(word);
    freqMap.set(word, count + 1);
  });
  const heap = new MinHeap(k); // created min-heap of size k
  const input = [];
  freqMap.forEach((value, key) => input.push([key, value])); // input format [<word>, <frequency>]
  heap.build(input); // O(nlogk)
  return heap
    .get()
    .map((val) => val[0])
    .reverse(); // O(klogk + k + k) ~ O(klogk)
};
class Heap {
  constructor(size, property) {
    this.data = new Array(size); // SC: O(k)
    this.property = property;
  }
  size() {
    // O(1)
    return this.data.length;
  }
  build(arr) {
    // O(nlogk)
    let i = 0;
    for (i = 0; i < this.size(); ++i) {
      // O(k)
      this.data[i] = arr[i];
    }
    for (let j = Math.floor((this.size() - 2) / 2); j >= 0; --j) {
      // O(klogk)
      this.heapify(j);
    }
    while (i < arr.length) {
      // O((n - k) * logk)
      // if heap top is less than next entry, replace the heap top
      if (this.compare(this.data[0], arr[i])) {
        this.data[0] = arr[i];
        this.heapify(0);
      }
      ++i;
    }
  }
  heapify(idx) {
    // O(logk)
    const l = 2 * idx + 1,
      r = 2 * idx + 2;
    let p = idx;
    if (l < this.size() && this.compare(this.data[l], this.data[p])) {
      p = l;
    }
    if (r < this.size() && this.compare(this.data[r], this.data[p])) {
      p = r;
    }
    if (p !== idx) {
      [this.data[p], this.data[idx]] = [this.data[idx], this.data[p]];
      this.heapify(p);
    }
  }
  compare(a, b) {
    // O(1)
    switch (this.property) {
      // if freq of a is less than freq of b OR if freq is same but a is lexicographically greater than b then a should be the parent node
      case 'MIN':
        return a[1] < b[1] || (a[0] > b[0] && a[1] === b[1]);
    }
  }
  get() {
    // until the heap is empty, create the resultant array by removing elements from the top
    // the resultant array will be in increasing order, hence we need to reverse it to get the required order
    const result = [];
    while (this.size()) {
      const top = this.data[0];
      [this.data[0], this.data[this.size() - 1]] = [
        this.data[this.size() - 1],
        this.data[0],
      ];
      this.data.pop();
      this.heapify(0);
      result.push(top);
    }
    return result;
  }
}
class MinHeap extends Heap {
  constructor(size) {
    super(size, 'MIN');
  }
}

export default topKFrequent;
