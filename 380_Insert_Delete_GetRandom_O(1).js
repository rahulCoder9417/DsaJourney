var RandomizedSet = function() {
    this.map = new Map();
    this.arr = [];      
  };
  
  RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
  };
  
  RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;
  
    const idx = this.map.get(val);
    const last = this.arr[this.arr.length - 1];
  
    this.arr[idx] = last;
    this.map.set(last, idx);
  
    this.arr.pop();
    this.map.delete(val);
  
    return true;
  };
  
  RandomizedSet.prototype.getRandom = function() {
    const randIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randIndex];
  };
  