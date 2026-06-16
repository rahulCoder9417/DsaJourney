/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    let result = '';
    for (const ch of s) {
        if (ch === '*') result = result.slice(0, -1);
        else if (ch === '#') result += result;
        else if (ch === '%') result = result.split('').reverse().join('');
        else result += ch;
    }
    return result;
};