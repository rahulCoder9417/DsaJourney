use std::collections::{BinaryHeap, HashMap};

struct EventManager {
    heap: BinaryHeap<(i32, i32)>, // (priority, -event_id)
    active: HashMap<i32, i32>,    // event_id -> current priority
}

impl EventManager {
    fn new(events: Vec<Vec<i32>>) -> Self {
        let mut heap = BinaryHeap::new();
        let mut active = HashMap::new();

        for e in events {
            let id = e[0];
            let priority = e[1];

            heap.push((priority, -id)); 
            active.insert(id, priority);
        }

        Self { heap, active }
    }

    fn update_priority(&mut self, event_id: i32, new_priority: i32) {
        self.active.insert(event_id, new_priority);
        self.heap.push((new_priority, -event_id)); 
    }

    fn poll_highest(&mut self) -> i32 {
        while let Some((priority, neg_id)) = self.heap.pop() {
            let id = -neg_id;

            if let Some(&current_priority) = self.active.get(&id) {
                if current_priority == priority {
                    self.active.remove(&id);
                    return id;
                }
            }
        }

        -1
    }
}