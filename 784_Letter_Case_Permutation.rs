impl Solution {
    pub fn letter_case_permutation(s: String) -> Vec<String> {
        let mut result = Vec::new();
        let mut path = String::new();
        let chars:Vec<char> = s.chars().collect();
        fn dfs(i:usize,chars: &Vec<char>, path: &mut String ,result:&mut Vec<String>){
            if i == chars.len(){
                result.push(path.clone());
                return;
            }
            let c =chars[i];
            if c.is_alphabetic(){
                //check lowercase 
                path.push(c.to_ascii_lowercase());
                dfs(i+1,chars,path,result);
                path.pop();
                //uppercase
                path.push(c.to_ascii_uppercase());
                dfs(i+1,chars,path,result);
                path.pop();
            }else {
                path.push(c);
                dfs(i+1,chars,path,result);
                path.pop();
            }
            }
dfs(0,&chars,&mut path,&mut result);
result
        

    }
}