/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  const mHeap = new MinHeap();
  mHeap.sortKey = 0;
  const l = matrix.length;
  for (let i = 0; i < l; i++) mHeap.push([matrix[0][i], 0, i]);
  let res = null;
  while (k--) {
    const t = mHeap.pop();
    if (!t) return res;
    const [val, i, j] = t;
    res = val;
    if (i < l - 1) mHeap.push([matrix[i + 1][j], i + 1, j]);
  }
  return res;
};

class Heap {
  constructor(sortKey = null, arr = []) {
    this.heap = [];
    this.sortKey = sortKey;
    if (arr.length) this.buildHeap(arr);
  }

  push(val) {
    this.heap.push(val);
    this.heapUp(this.heap.length - 1);
  }

  pop() {
    if (!this.heap.length) return null;
    if (this.heap.length == 1) return this.heap.pop();
    const res = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapDown(0);
    return res;
  }

  id(i) {
    if (this.sortKey !== null) return this.heap[i][this.sortKey];
    return this.heap[i];
  }

  swap(i, j) {
    const t = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = t;
  }
  /*for child class to implement*/
  heapUp(i) {
    //heap up
  }

  heapDown(i) {
    //heap down
  }

  buildHeap(list) {
    //build heap
    for (let i of list) this.push(i);
  }

  toString() {
    return this.heap;
  }
}

class MinHeap extends Heap {
  heapUp(i) {
    const pI = (i - 1) >> 1;
    if (pI < 0) return;
    if (this.id(i) < this.id(pI)) {
      this.swap(i, pI);
      return this.heapUp(pI);
    }
  }

  heapDown(i) {
    const lI = i * 2 + 1;
    const rI = i * 2 + 2;
    if (lI >= this.heap.length) return;
    const v = Math.min(
      this.id(i),
      this.id(lI),
      rI >= this.heap.length ? Number.MAX_VALUE : this.id(rI)
    );
    if (v == this.id(i)) return;
    if (v == this.id(lI)) {
      this.swap(i, lI);
      return this.heapDown(lI);
    }
    this.swap(i, rI);
    this.heapDown(rI);
  }
}

class MaxHeap extends Heap {
  heapUp(i) {
    const pI = (i - 1) >> 1;
    if (pI < 0) return;
    if (this.id(i) > this.id(pI)) {
      this.swap(i, pI);
      return this.heapUp(pI);
    }
  }

  heapDown(i) {
    const lI = i * 2 + 1;
    const rI = i * 2 + 2;
    if (lI >= this.heap.length) return;
    const v = Math.max(
      this.id(i),
      this.id(lI),
      rI >= this.heap.length ? Number.MIN_VALUE : this.id(rI)
    );
    if (v == this.id(i)) return;
    if (v == this.id(lI)) {
      this.swap(i, lI);
      return this.heapDown(lI);
    }
    this.swap(i, rI);
    this.heapDown(rI);
  }
}

export default kthSmallest;
