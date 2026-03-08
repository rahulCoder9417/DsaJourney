var rotateRight = function(head, k) {
    if(!head || !head.next || k===0)return head
    let l =1
    let tail = head;
    while(tail.next){
        tail = tail.next;
         l++
    }
 k = k%l
    if(k===0 )return head
    tail.next = head 
    let b = l-k
    let n = head
    for (let i =1;i<b;i++)n = n.next
    let nh = n.next 
    n.next = null
    return nh
};