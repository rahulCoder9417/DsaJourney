impl Solution {
    pub fn smallest_string(s: String) -> String {
        let mut chars: Vec<char> = s.chars().collect();
        let n = chars.len();
        
        let mut i = 0;
        while i < n && chars[i] == 'a' {
            i += 1;
        }
        
        if i == n {
            chars[n - 1] = 'z';
            return chars.into_iter().collect();
        }
        
        while i < n && chars[i] != 'a' {
            chars[i] = ((chars[i] as u8) - 1) as char;
            i += 1;
        }
        
        chars.into_iter().collect()
    }
}