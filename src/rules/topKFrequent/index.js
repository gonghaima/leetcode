// min heap
// O(N*LogK)

// https://leetcode.com/problems/top-k-frequent-words/discuss/993569/Javascript-MinHeap-Solution-with-T-O(N*LogK)

/******************************************************************************************************
 * Runtime: 167 ms, faster than 9.66% of JavaScript online submissions for Top K Frequent Words.      *
 * Memory Usage: 47.5 MB, less than 36.70% of JavaScript online submissions for Top K Frequent Words. *
 ******************************************************************************************************/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  return minHeapSolution(words, k);
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const isLessPriority = (nodeA, nodeB) => {
  if (!nodeA || !nodeB) {
    return false;
  }
  return (
    nodeA.priority < nodeB.priority ||
    (nodeA.priority === nodeB.priority && nodeA.val > nodeB.val)
  );
};

function MinHeap(size) {
  this.size = size;
  this.data = [];
}

function Node(val, priority) {
  this.val = val;
  this.priority = priority;
}

MinHeap.prototype.bubbleUp = function bubbleUp(index) {
  const node = this.data[index];
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.data[parentIndex];
    if (isLessPriority(node, parent)) {
      swap(this.data, index, parentIndex);
      index = parentIndex;
    } else {
      break;
    }
  }
};

MinHeap.prototype.bubbleDown = function bubbleDown(index) {
  const node = this.data[index];
  while (index < this.data.length) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const left = this.data[leftIndex];
    const right = this.data[rightIndex];
    let smallerIndex = null;
    if (isLessPriority(left, node)) {
      smallerIndex = leftIndex;
    }
    if (smallerIndex === null && isLessPriority(right, node)) {
      smallerIndex = rightIndex;
    }
    if (smallerIndex !== null && isLessPriority(right, left)) {
      smallerIndex = rightIndex;
    }
    if (smallerIndex === null) {
      break;
    }
    swap(this.data, index, smallerIndex);
    index = smallerIndex;
  }
};

/**
 * T: O(LogK)
 * S: O(1)
 */
MinHeap.prototype.push = function push(val, priority) {
  const newNode = new Node(val, priority);
  if (this.data.length < this.size) {
    this.data.push(newNode);
    this.bubbleUp(this.data.length - 1);
  } else if (isLessPriority(this.data[0], newNode)) {
    this.data[0] = newNode;
    this.bubbleDown(0);
  }
};

/**
 * T: O(LogK)
 * S: O(1)
 */
MinHeap.prototype.shift = function shift() {
  const min = this.data[0];
  const lastNode = this.data.pop();
  if (this.data.length < 1) {
    return min;
  }
  this.data[0] = lastNode;
  this.bubbleDown(0);
  return min;
};

/**
 * T: O(N*LogK)
 * S: O(N)
 */
const minHeapSolution = (words, k) => {
  const hashTable = {}; // S: O(N)
  const heap = new MinHeap(k); // S: O(K)
  for (const word of words) {
    // T: O(N)
    hashTable[word] = hashTable[word] === undefined ? 1 : hashTable[word] + 1;
  }
  Object.keys(hashTable).forEach((word) => {
    // T: O(N)
    heap.push(word, hashTable[word]); // T: O(LogK)
  });
  const result = []; // S: O(K)
  while (heap.data.length > 0) {
    // T: O(K)
    result.push(heap.shift().val); // T: O(K)
  }
  return result.reverse(); // T: O(K)
};

export default topKFrequent;
