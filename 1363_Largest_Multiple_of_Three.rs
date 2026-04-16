use std::cmp::Ordering;

impl Solution {
    pub fn largest_multiple_of_three(mut digits: Vec<i32>) -> String {
        digits.sort();

        let sum: i32 = digits.iter().sum();
        let remainder = sum % 3;
        fn remove_digits(digits: &mut Vec<i32>, rem: i32, count: i32) -> bool {
            let mut removed = 0;
            let mut i = 0;

            while i < digits.len() && removed < count {
                if digits[i] % 3 == rem {
                    digits.remove(i);
                    removed += 1;
                } else {
                    i += 1;
                }
            }

            removed == count
        }
        if remainder != 0 {
            if !remove_digits(&mut digits, remainder, 1) {
                remove_digits(&mut digits, 3 - remainder, 2);
            }
        }

        if digits.is_empty() {
            return "".to_string();
        }

        digits.sort_by(|a, b| b.cmp(a));

        if digits[0] == 0 {
            return "0".to_string();
        }
        digits.iter().map(|d| d.to_string()).collect()
    }
}