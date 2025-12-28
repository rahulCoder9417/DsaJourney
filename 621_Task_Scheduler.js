class MaxHea {
    constructor() {
      this.heap = [];
    }
  
    parent(i) { return Math.floor((i - 1) / 2); }
    left(i) { return 2 * i + 1; }
    right(i) { return 2 * i + 2; }
  
    push(val) {
      this.heap.push(val);
      this._heapifyUp();
    }
  
    pop() {
      if (this.size() === 0) return null;
      const max = this.heap[0];
      const end = this.heap.pop();
      if (this.size() > 0) {
        this.heap[0] = end;
        this._heapifyDown();
      }
      return max;
    }
  
    peek() { return this.heap[0] || null; }
    size() { return this.heap.length; }
  
    _heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = this.parent(index);
        if (this.heap[index][1] <= this.heap[parentIndex][1]) break;
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      }
    }
  
    _heapifyDown() {
      let index = 0;
      const length = this.heap.length;
      while (true) {
        const left = this.left(index);
        const right = this.right(index);
        let largest = index;
  
        if (left < length && this.heap[left][1] > this.heap[largest][1]) largest = left;
        if (right < length && this.heap[right][1] > this.heap[largest][1]) largest = right;
  
        if (largest === index) break;
        [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
        index = largest;
      }
    }
  }
  
  var leastInterval = function(tasks, n) {
    const map = new Map();
    for (const t of tasks) {
      map.set(t, (map.get(t) || 0) + 1);
    }
  
    const heap = new MaxHea();
    for (const [task, count] of map.entries()) {
      heap.push([task, count]);
    }
  
    const queue = []; 
    let time = 0;
  
    while (heap.size() > 0 || queue.length > 0) {
      time++;
  
      if (heap.size() > 0) {
        const [task, count] = heap.pop();
        if (count - 1 > 0) {
          queue.push([task, count - 1, time + n]);
        }
      }
      if (queue.length > 0 && queue[0][2] === time) {
        const [task, count] = queue.shift();
        heap.push([task, count]);
      }
    }
  
    return time;
  };
  