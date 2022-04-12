// max heap

// https://leetcode.com/problems/top-k-frequent-words/discuss/757524/JavaScript-simple-max-heap-solution-(beats-87)

/******************************************************************************************************
 * Runtime: 78 ms, faster than 89.93% of JavaScript online submissions for Top K Frequent Words.      *
 * Memory Usage: 45.2 MB, less than 74.67% of JavaScript online submissions for Top K Frequent Words. *
 ******************************************************************************************************/

const MaxHeap = () => {
  const heapContainer = [];

  const hasNext = (i) => i > 0;

  const getItems = () => heapContainer;

  const swap = (i, j) => {
    const tmp = heapContainer[i];
    heapContainer[i] = heapContainer[j];
    heapContainer[j] = tmp;
  };

  const pairIsInOrder = (v1, v2) => {
    const res = v1.val - v2.val;
    if (res === 0)
      // if values equal, sort alphabetically
      return v1.key < v2.key;
    else return res >= 1;
  };

  const heapifyUp = () => {
    let index = heapContainer.length - 1;

    while (
      hasNext(index) &&
      !pairIsInOrder(heapContainer[index - 1], heapContainer[index])
    ) {
      swap(index, index - 1);
      index = index - 1;
    }
  };

  const add = (val) => {
    heapContainer.push(val);
    heapifyUp();
  };

  return {
    add,
    getItems,
  };
};

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  // create frequency map
  const freqMap = words.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});

  const heap = MaxHeap();

  // add values to heap
  Object.keys(freqMap).forEach((key) => heap.add({ key, val: freqMap[key] }));

  // return top k
  return heap
    .getItems()
    .slice(0, k)
    .map((res) => res.key);
};

export default topKFrequent;
