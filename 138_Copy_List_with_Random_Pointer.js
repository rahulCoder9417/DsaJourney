function copyRandomList(head) {
    if (!head) return null;

    const oldToNew = new Map();

    let curr = head;
    while (curr) {
        oldToNew.set(curr, new Node(curr.val));
        curr = curr.next;
    }

    curr = head;
    while (curr) {
        const copy = oldToNew.get(curr);
        copy.next = curr.next ? oldToNew.get(curr.next) : null;
        copy.random = curr.random ? oldToNew.get(curr.random) : null;
        curr = curr.next;
    }

    return oldToNew.get(head);
}