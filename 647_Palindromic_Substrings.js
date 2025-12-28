/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (s.length < 2) return 1;

  let start = 0, count = 0;

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++
      l--; r++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i);    
    expand(i, i + 1);
  }

  return count;
};