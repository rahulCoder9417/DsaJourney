class MinHea {
    constructor(array) {
        this.heap = [];
        array.forEach(num => {
            let i = num[0]*num[0] + num[1]*num[1]
            this.add([i,num])
        });
    }

    add(val) {
            this._insert(val);
    }

    _insert(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    remove() { 
        if (this.heap.length === 1) return this.heap.pop()[1];
        let temp =this.heap[0]
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return temp[1]
    }

    _heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[i][0] < this.heap[parent][0]) {
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
            if (right < this.heap.length && this.heap[right][0] < this.heap[left][0]) {
                smallest = right;
            }
            if (this.heap[i][0] > this.heap[smallest][0]) {
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            } else break;
        }
    }
} 

var kClosest = function(points, k) {
    let h = new MinHea(points)
    let result = []
    for (let i = 0; i < k; i++) {
        result.push(h.remove())
    }
    return result
};