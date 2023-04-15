/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

// https://leet-codes.blogspot.com/2022/09/218-skyline-problem.html
class Heap {
  //max Heap
  constructor({ comparator } = { comparator: (a, b) => a - b }) {
    //changed for comparator
    // Due to a completely balanced nature of the heap tree,
    // the index of 1st element in current row/level indicates the # of elements in current row/level
    this.size = 0;
    this.store = new Array(this.size + 1); //1-based array for simplicity
    this.comparator = comparator; //changed for comparator
  }

  static heapify(arr, { comparator } = { comparator: (a, b) => a - b }) {
    let heap = new Heap();
    heap.store = arr; //in-place heapification
    heap.size = arr.length;
    // use 0-based array is actually faster because it eliminates shift
    heap.store.unshift(null); //shift is O(n), but it simplifies a bit
    for (let i = heap.size - Number.parseInt((heap.size + 1) / 2); i > 0; --i) {
      heap.heapify(i);
    }
    return heap;
  }
  get queueSize() {
    return this.size;
  }

  heappush(x) {
    this.store[++this.size] = x;
    this.heapifyBottomUp(this.size);
  }

  heapifyBottomUp(i) {
    for (
      ;
      i > 1 &&
      this.comparator(this.store[i], this.store[Math.floor(i / 2)]) > 0;
      i = Number.parseInt(i / 2)
    ) {
      //changed for comparator
      [this.store[Math.floor(i / 2)], this.store[i]] = [
        this.store[i],
        this.store[Number.parseInt(i / 2)],
      ];
    }
  }
  peek() {
    return this.size ? this.store[1] : null;
  }
  heappop() {
    if (this.size === 0) return null;
    let r = this.store[1];
    this.store[1] = this.store[this.size--];
    this.heapify(1); // because i's both children are by themselves maxheap already (invariant/precondition)
    return r;
  }

  heapify(i) {
    for (
      ;
      i * 2 <= this.size &&
      this.comparator(
        this.store[i],
        this.max(
          this.store[i * 2],
          i * 2 + 1 <= this.size ? this.store[i * 2 + 1] : this.store[i * 2]
        )
      ) < 0;

    ) {
      //changed for comparator
      if (
        this.store[i * 2] ===
        this.max(
          this.store[i * 2],
          i * 2 + 1 <= this.size ? this.store[i * 2 + 1] : this.store[i * 2]
        )
      ) {
        //changed for comparator
        [this.store[i * 2], this.store[i]] = [this.store[i], this.store[i * 2]];
        i *= 2;
      } else {
        [this.store[i * 2 + 1], this.store[i]] = [
          this.store[i],
          this.store[i * 2 + 1],
        ];
        i = i * 2 + 1;
      }
    }
  }

  max(a, b) {
    //changed for comparator
    return this.comparator(a, b) > 0 ? a : b;
  }
}

var getSkyline = function(buildings) {
  var res = [],
    x = [],
    heap = new Heap({ comparator: (a, b) => a[0] - b[0] });
  heap.heappush([0, Number.POSITIVE_INFINITY]);
  buildings.forEach(
    (v) => (x.push([v[0], v[1], v[2]]), x.push([v[1], 0, v[2]]))
  );
  for (let [c, e, h] of x.sort((a, b) =>
    a[0] === b[0]
      ? Math.sign(b[1]) === Math.sign(a[1])
        ? a[1] === 0
          ? a[2] - b[2]
          : b[2] - a[2]
        : b[1] - a[1]
      : a[0] - b[0]
  )) {
    if (e) heap.heappush([h, e]);
    else while (heap.peek()[1] <= c) heap.heappop();
    if (res[res.length - 1]?.[1] !== heap.peek()[0])
      res.push([c, heap.peek()[0]]);
  }
  return res;
};

export default getSkyline;
