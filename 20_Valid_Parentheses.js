var isValid = function(s) {
    const stack = [];
    const map = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  
    for (const ch of s) {
      if (map[ch]) {
        stack.push(map[ch]);
      } else {
        if (stack.pop() !== ch) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };
  