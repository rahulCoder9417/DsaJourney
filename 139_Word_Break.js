var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict);
    const cache = [];
  
    function dfs(i) {
      if (i === s.length) return true;
      if (cache[i] !== undefined) return cache[i];
  
      let word = "";
      for (let j = i; j < s.length; j++) {
        word += s[j];
        if (set.has(word) && dfs(j + 1)) {
          cache[i] = true;   
          return true;
        }
      }
  
      cache[i] = false; 
      return false;
    }
  
    return dfs(0);
  };
  
  