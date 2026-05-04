impl Solution {
    pub fn rotate_string(s: String, goal: String) -> bool {
        if s.len() != goal.len() {
            return false;
        }
        let combined = s.clone() + &s;
        combined.contains(&goal)
    }
}