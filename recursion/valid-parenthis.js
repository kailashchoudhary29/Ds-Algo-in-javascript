function isValid(s) {
    const stack = [];
    const open = { '(': ')', '{': '}', '[': ']' };
    const closed = { ')': true, '}': true, ']': true };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            // console.log(open[stack.pop()])
            if (open[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example usage
 const str1 = "()[]{}";

 console.log(isValid(str1)); // true
//  const str2 = "([)]";
// console.log(isValid(str2)); // false
