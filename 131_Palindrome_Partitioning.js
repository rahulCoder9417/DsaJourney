var partition = function(s) {
    const result = [];

    function isPalindrome(str) {
        let i = 0, j = str.length - 1;
        while(i <= j) {
            if(str[i] !== str[j]) return false;
            i++;
            j--;
        }
        return true;
    }

    function dfs(start, path) {
        if(start === s.length) {
            result.push([...path]);
            return;
        }

        for(let end = start + 1; end <= s.length; end++) {
            const substring = s.slice(start, end);
            if(isPalindrome(substring)) {
                path.push(substring);
                dfs(end, path);
                path.pop();
            }
        }
    }

    dfs(0, []);
    return result;
};