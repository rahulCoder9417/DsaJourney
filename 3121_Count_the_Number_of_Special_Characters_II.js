/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let ans = 0

    for (let i = 0; i < 26; i++) {
        const lower = String.fromCharCode(97 + i)
        const upper = String.fromCharCode(65 + i)

        const lastLower = word.lastIndexOf(lower)
        const firstUpper = word.indexOf(upper)

        if (lastLower !== -1 &&
            firstUpper !== -1 &&
            lastLower < firstUpper) {
            ans++
        }
    }

    return ans
}