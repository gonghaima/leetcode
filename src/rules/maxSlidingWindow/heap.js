/*******************************************************************************************************
 * Runtime: 1464 ms, faster than 18.30% of JavaScript online submissions for Sliding Window Maximum.   *
 * Memory Usage: 77.3 MB, less than 5.05% of JavaScript online submissions for Sliding Window Maximum. *
 *******************************************************************************************************/

var maxSlidingWindow = function (nums, k) {
    const heap = new Heap(nums.slice(0, k), (a, b) => b - a);
    const answer = [];
    let cnt = k;

    for (let n of nums.slice(k)) {
        answer.push(heap.peek());

        heap.popAt(cnt - k);
        heap.add(n);
        cnt++;
    }
    answer.push(heap.peek());
    return answer;

};

class Heap {
    constructor(array, cmpFn = (value1, value2) => value1 - value2) {
        this._cmpFn = cmpFn;
        this.idxMap = new Map();
        this.idxSeqMap = new Map();

        this.tree = [];
        this.size = 0;
        this.idxSequence = 0;

        this._left = idx => 2 * idx + 1;
        this._right = idx => 2 * idx + 2;
        this._parent = idx => (idx - 1) / 2 >> 0;

        this.run(array);
    }

    run(arr) {
        for (let v of arr) {
            this.add(v);
        }
    }

    _swap(idx1, idx2) {
        let idxSeq1 = this.idxMap.get(idx1);
        let idxSeq2 = this.idxMap.get(idx2);

        this.idxMap.set(idx1, idxSeq2);
        this.idxMap.set(idx2, idxSeq1);

        this.idxSeqMap.set(idxSeq1, idx2);
        this.idxSeqMap.set(idxSeq2, idx1);

        [this.tree[idx1], this.tree[idx2]] = [this.tree[idx2], this.tree[idx1]];
    }

    _heapifyUp(idx) {
        let parent = this._parent(idx);

        while (parent != idx && this._cmpFn(this.tree[idx], this.tree[parent]) < 0) {
            this._swap(parent, idx);
            idx = parent;
            parent = this._parent(idx);
        }
    }

    _heapifyDown(idx) {
        let parent = this._parent(idx);
        let left = this._left(idx);
        let right = this._right(idx);
        let current = idx;

        if (left < this.size && this._cmpFn(this.tree[left], this.tree[current]) < 0) {
            current = left;
        }
        if (right < this.size && this._cmpFn(this.tree[right], this.tree[current]) < 0) {
            current = right;
        }

        if (idx != current) {
            this._swap(idx, current);
            this._heapifyDown(current);
        }
    }

    _print() {
        console.log(this.tree);
    }

    add(value, index = this.idxSequence) {
        this.tree[this.size] = value;

        this.idxMap.set(this.size, index);
        this.idxSeqMap.set(index, this.size);

        this.size++;
        this.idxSequence++;

        this._heapifyUp(this.size - 1);
    }

    pop() {
        const value = this.tree[0];

        this.size--;
        this._swap(0, this.size);

        this.tree.length = this.size;

        this._heapifyDown(0);

        return value;
    }

    popAt(idxSeq) {
        let idx = this.idxSeqMap.get(idxSeq) || 0;
        const value = this.tree[idx];

        this._swap(idx, this.size - 1);
        this._swap(0, this.size - 1);
        this.pop();

        this._heapifyDown(idx);
        this._heapifyUp(idx);

        return value;
    }

    peek() {
        return this.tree[0];
    }
}

export default maxSlidingWindow;