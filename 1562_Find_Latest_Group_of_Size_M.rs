impl Solution {
    pub fn find_latest_step(arr: Vec<i32>, m: i32) -> i32 {
        let n = arr.len();
        let mut length = vec![0i32; n + 2];
        let mut count = vec![0i32; n + 2]; 
        let mut result = -1;

        for (step, &pos) in arr.iter().enumerate() {
            let p = pos as usize;
            
            let left_len  = length[p - 1];
            let right_len = length[p + 1];
            let new_len   = left_len + right_len + 1;

            length[p - left_len as usize] = new_len;
            length[p + right_len as usize] = new_len;
            length[p] = new_len; 

            if left_len > 0  { count[left_len as usize]  -= 1; }
            if right_len > 0 { count[right_len as usize] -= 1; }
            count[new_len as usize] += 1;

            if count[m as usize] > 0 {
                result = (step + 1) as i32;
            }
        }

        result
    }
}