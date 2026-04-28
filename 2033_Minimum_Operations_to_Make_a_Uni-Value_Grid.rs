impl Solution {
    pub fn min_operations(grid: Vec<Vec<i32>>, x: i32) -> i32 {
        let mut arr: Vec<i32> = grid.iter().flat_map(|row| row.iter()).cloned().collect();
        arr.sort();
        let median = arr[arr.len()/2];
        let mut operations = 0;
        for &num in &arr{
            let diff = (num - median).abs();
            if diff%x !=0{
                return -1;
            }
            operations += diff/x;
        }
        operations
    }
}