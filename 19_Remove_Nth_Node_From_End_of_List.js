/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(n===1){
        if(head.next===null)return null
        let a =head
        while(a){
            if(a.next.next===null)a.next=null
            a=a.next
        }
        return head
    }

    const map =  new Map()

    let cur= head
    let i=0
    while(cur){
        map.set(i,cur)
        i++
        cur = cur.next
    }
    if(map.size===n){let k=head.next;head.next=head.next.next || null;return k}
    map.get(map.size-n-1).next=map.get(map.size-n+1) || null
    return head
};