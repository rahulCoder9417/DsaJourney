class MaxHea {
    constructor(stones) {
        this.heap = [];
        stones.forEach(num => this.add(num));
    }

    add(val) {
            this._insert(val);
    }

    _insert(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    remove() { 
        if (this.heap.length === 1) return this.heap.pop();
        let temp =this.heap[0]
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return temp
    }

    _heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[i] > this.heap[parent]) {
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
            let largest = left;
            if (right < this.heap.length && this.heap[right] > this.heap[left]) {
                largest = right;
            }
            if (this.heap[i] < this.heap[largest]) {
                [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
                i = largest;
            } else break;
        }
    }
}
var lastStoneWeight = function(stones) {
    let heap  = new MaxHea(stones)
    while (heap.heap.length>=2) {
    
        let x = heap.remove()
        let y = heap.remove()
        if(x===y)continue
        heap.add(Math.abs(x-y))
    }
    return(heap.heap[0] ? heap.heap[0] :0)
};