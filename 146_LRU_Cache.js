class LLNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

var LRUCache = function(capacity) {
    this.cap = capacity;
    this.map = new Map();
    this.head = null;
    this.tail = null;
};

LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;

    let node = this.map.get(key);

    if (node === this.tail) return node.value;

    if (node === this.head) {
        this.head = node.next;
        this.head.prev = null;
    } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    this.tail.next = node;
    node.prev = this.tail;
    node.next = null;
    this.tail = node;

    return node.value;
};

LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        node.value = value;

        if (node === this.tail) return;

        if (node === this.head) {
            this.head = node.next;
            this.head.prev = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

        this.tail.next = node;
        node.prev = this.tail;
        node.next = null;
        this.tail = node;

    } else {
        if (this.map.size === this.cap) {
            let next = this.head.next;
            this.map.delete(this.head.key);
            if (next) next.prev = null;
            this.head.next = null;
            this.head = next;
        }

        let node = new LLNode(key, value);
        this.map.set(key, node);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }
};