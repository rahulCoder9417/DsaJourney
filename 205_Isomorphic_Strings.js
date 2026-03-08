/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const m1 = new Map(), m2 = new Map();

    for (let i = 0; i < s.length; i++) {
        if (m1.get(s[i]) !== m2.get(t[i])) return false;
        m1.set(s[i], i);
        m2.set(t[i], i);
    }
    return true;
};