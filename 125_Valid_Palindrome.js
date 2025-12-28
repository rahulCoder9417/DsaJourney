/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = str => {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
  };
  