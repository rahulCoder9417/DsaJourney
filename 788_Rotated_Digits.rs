use std::collections::HashSet;

impl Solution {
    fn is_good(i:i32)->bool{
        let mut num :i32=i;
        let mut change : HashSet<_> = [2,5,6,9].into_iter().collect();
        let mut nochange : HashSet<_> = [0,1,8].into_iter().collect();
        let mut result :bool =false;
        while num > 0 {
                let digit = num % 10;
                if(!(change.contains(&digit)||nochange.contains(&digit))){
                    return false;
                }
                if (!result && change.contains(&digit)){
                    result = true;
                }
                num = num / 10;
        }
        return result;
    }

    pub fn rotated_digits(n: i32) -> i32 {
        let mut good = 0;
        for i in 2..=n{
            if(Self::is_good(i)){
                good+=1;
            }
        }
        good
    }
}