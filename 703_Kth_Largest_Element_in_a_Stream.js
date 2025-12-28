class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = [];
        nums.forEach(num => this.add(num));
    }

    add(val) {
        if (this.heap.length < this.k) {
            this._insert(val);
        } else if (val > this.heap[0]) {
            this._remove();
            this._insert(val);
        }
        return this.heap[0];
    }

    _insert(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    _remove() {
    if (this.heap.length === 1) {
        this.heap.pop();
        return;
        }
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
    }

    _heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[i] < this.heap[parent]) {
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
                i = parent;
            } else break;
        }
    }

    _heapifyDown() {
        let i = 0;
        while (i * 2 + 1 < this.heap.length) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            let smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[left]) {
                smallest = right;
            }
            if (this.heap[i] > this.heap[smallest]) {
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            } else break;
        }
    }
}