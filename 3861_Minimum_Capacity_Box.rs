impl Solution {
    pub fn minimum_index(capacity: Vec<i32>, item_size: i32) -> i32 {
        let mut index:i32=-1;
        let mut minCap :i32= 101;
        for (i,val) in capacity.iter().enumerate() {
            if *val >= item_size && *val<minCap{
                minCap =*val;
                index =i as i32;
            }
        }
        index
    }
}