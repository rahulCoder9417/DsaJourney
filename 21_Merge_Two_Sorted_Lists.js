var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let current1 = list1;
    let current2 = list2;
    let temp;

    if (current1.val > current2.val) {
        temp = current2;
        current2 = current2.next;
    } else {
        temp = current1;
        current1 = current1.next;
    }

    let tail = temp;

    while (current1 && current2) {
        if (current1.val >= current2.val) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
    }

    if (current1) tail.next = current1;
    if (current2) tail.next = current2;

    return temp;
};
