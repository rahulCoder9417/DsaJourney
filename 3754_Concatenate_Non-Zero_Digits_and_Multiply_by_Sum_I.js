/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let x = 0;
    
    let sum = 0;
    
    let divisor = 1;
    while (Math.floor(n / divisor) >= 10) {
        divisor *= 10;
    }
    
    while (divisor > 0) {
        const digit = Math.floor(n / divisor);
        
        n %= divisor;
        
        if (digit !== 0) {
            x = x * 10 + digit;
            
            sum += digit;
        }
        
        divisor = Math.floor(divisor / 10);
    }
    
    return x * sum;
};