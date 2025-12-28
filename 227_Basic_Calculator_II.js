function calculate(s) {
    let stack = [];
    let currentNumber = 0;
    let sign = '+';
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char >= '0' && char <= '9') {
        currentNumber = currentNumber * 10 + parseInt(char);
      }
  
      if ((char < '0' || char > '9') && char !== ' ' || i === s.length - 1) {
        if (sign === '+') {
          stack.push(currentNumber);
        } else if (sign === '-') {
          stack.push(-currentNumber);
        } else if (sign === '*') {
          stack.push(stack.pop() * currentNumber);
        } else if (sign === '/') {
          const top = stack.pop();
          const truncated = top < 0
            ? Math.ceil(top / currentNumber)
            : Math.floor(top / currentNumber);
          stack.push(truncated);
        }
  
        sign = char;
        currentNumber = 0;
      }
    }
  
    return stack.reduce((a, b) => a + b, 0);
  }
  