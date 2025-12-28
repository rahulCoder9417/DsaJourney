var evalRPN = function(tokens) {
    const stack = [];
    const operators = new Set(["+", "-", "*", "/"]);

    for (const token of tokens) {
        if (operators.has(token)) {
            const a = stack.pop();
            const b = stack.pop();
            let result;

            if (token === "+") result = b + a;
            else if (token === "-") result = b - a;
            else if (token === "*") result = b * a;
            else if (token === "/") result = Math.trunc(b / a);

            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
};
