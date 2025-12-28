/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
  
    const countS = Array(26).fill(0);
    const countT = Array(26).fill(0);
  
    for (let i = 0; i < s.length; i++) {
      countS[s.charCodeAt(i) - 97]++;
      countT[t.charCodeAt(i) - 97]++;
    }
  
    for (let i = 0; i < 26; i++) {
      if (countS[i] !== countT[i]) return false;
    }
  
    return true;
  };
  
  var groupAnagrams = function(strs) {
    const result = [];
  
    while (strs.length > 0) {
      const base = strs[0];
  
      const { kept, removed } = strs.reduce(
        (acc, item) => {
          if (isAnagram(base, item)) acc.kept.push(item);
          else acc.removed.push(item);
          return acc;
        },
        { kept: [], removed: [] }
      );
  
      result.push(kept);
      strs = removed; 
    }
  
    return result;
  };
  
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
  