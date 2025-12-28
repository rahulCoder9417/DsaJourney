/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const a = new Map()
    if (s.length!==t.length)return false
    for (let i = 0; i < s.length; i++) {
        a.set(s[i], (a.get(s[i]) || 0) + 1);
    }
    for (let j = 0; j < t.length; j++) {
        let c =a.get(t[j])
        console.log(c)
        if(!c)return false
        else if(c===0) return false
    
            a.set(t[j] ,c-1)
        
    }
    return true
};

isAnagram("anagram","nagaram")