/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.median = 0; // keep track of median with every addition
    this.upper = new MinHeap(); // to store larger half of the numbers
    this.lower = new MaxHeap(); // to store smaller half of the numbers
  };
  
  /** 
   * @param {number} num
   * @return {void}
   */
  MedianFinder.prototype.addNum = function(num) {
    if (this.upper.size < this.lower.size) {
      if (num >= this.median) {
        this.upper.add(num);
      } else {
        this.upper.add(this.lower.extract());
        this.lower.add(num);
      }
      this.median = (this.lower.peek() + this.upper.peek()) / 2;
    } else if (this.lower.size < this.upper.size) {
      if (num >= this.median) {
        this.lower.add(this.upper.extract());
        this.upper.add(num);
      } else {
        this.lower.add(num);
      }
      this.median = (this.lower.peek() + this.upper.peek()) / 2;
    } else {
      if (num >= this.median) {
        this.upper.add(num);
        this.median = this.upper.peek();
      } else {
        this.lower.add(num);
        this.median = this.lower.peek();
      }
    }
  };
  
  /**
   * @return {number}
   */
  MedianFinder.prototype.findMedian = function() {
    if (this.upper.size === 0 && this.lower.size === 0) {
      return null;
    }
    if (this.lower.size > this.upper.size) {
      return this.lower.peek();
    }  
    if (this.upper.size > this.lower.size) {
      return this.upper.peek();
    }
    return (this.lower.peek() + this.upper.peek()) / 2;
  };
  
  
  /** 
   * Your MedianFinder object will be instantiated and called as such:
   * var obj = new MedianFinder()
   * obj.addNum(num)
   * var param_2 = obj.findMedian()
   */
  
  class Heap {
    constructor() {
      this.size = 0;
      this.heap = [];
    }
    /**
     * Swap two given nodes
     */
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    /**
     * Find parent index
     */
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
    /**
     * Find left child index
     */
    left(i) {
      return 2 * i + 1;
    }
    /**
     * Find right child index
     */
    right(i) {
      return 2 * i + 2;
    }
  }
  
  class MinHeap extends Heap {
    /**
     * Insert new node with given value into the Min Heap. The node bubbles up
     * until it is at the correct position.
     */
    add(v) {
      this.heap.push(v);
      this.size = this.heap.length;
          
      let index = this.heap.length - 1;
      while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
        this.swap(index, this.parent(index));
        index = this.parent(index);
      }
    }
    /**
     * Look up the top of the heap.
     */
    peek() {
      return this.heap[0] || null;
    }
    /**
     * Find the correct position for the node with given index.
     */
    heapify(i) {
      const left = this.left(i);
      const right = this.right(i);
      let smallestIndex = i;
      
      if (left < this.size && this.heap[left] < this.heap[smallestIndex]) {
        smallestIndex = left;
      }
      if (right < this.size && this.heap[right] < this.heap[smallestIndex]) {
        smallestIndex = right;
      }
      if (smallestIndex !== i) {
        this.swap(i, smallestIndex);
        this.heapify(smallestIndex);
      }
    }
    /**
     * Remove the top of the heap.
     */
    extract() {
      const min = this.heap[0];
      
      if (this.size > 1) {
        this.heap[0] = this.heap.pop();
        this.heapify(0);
      } else {
        this.heap.pop();
      }
      
      this.size = this.heap.length;
  
      return min;
    }
  }
  
  class MaxHeap extends Heap {
    add(v) {
      this.heap.push(v);
      this.size = this.heap.length;
      
      let index = this.heap.length - 1;
      while (index > 0 && this.heap[index] > this.heap[this.parent(index)]) {
        this.swap(index, this.parent(index));
        index = this.parent(index);
      }
    }
    
    peek() {
      return this.heap[0] || null;
    }
    
    heapify(i) {
      const left = this.left(i);
      const right = this.right(i);
      let largestIndex = i;
      
      if (left < this.size && this.heap[left] > this.heap[largestIndex]) {
        largestIndex = left;
      }
      if (right < this.size && this.heap[right] > this.heap[largestIndex]) {
        largestIndex = right;
      }
      if (largestIndex !== i) {
        this.swap(i, largestIndex);
        this.heapify(largestIndex);
      }
    }
    
    extract() {
      const max = this.heap[0];
      
      if (this.size > 1) {
        this.heap[0] = this.heap.pop(); 
        this.heapify(0);
      } else {
        this.heap.pop();
      }
      this.size = this.heap.length;
  
      return max;
    }
  }

export default MedianFinder;
