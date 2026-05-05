impl Solution {
    pub fn rotate_right(
        mut head: Option<Box<ListNode>>, 
        k: i32
    ) -> Option<Box<ListNode>> {

        if head.is_none() {
            return head;
        }

        let mut length = 0;
        let mut current = head.as_ref();

        while let Some(node) = current {
            length += 1;
            current = node.next.as_ref();
        }

        let k = (k as usize) % length;
        if k == 0 {
            return head;
        }

        let breaking = length - k;

        let mut current = head.as_mut();

        for _ in 0..breaking - 1 {
            current = current.unwrap().next.as_mut();
        }

        let mut start_node = current.as_mut().unwrap().next.take();

        let mut tail = start_node.as_mut();
        while let Some(node) = tail {
            if node.next.is_none() {
                node.next = head;
                break;
            }
            tail = node.next.as_mut();
        }

        start_node
    }
}