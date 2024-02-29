function reverseWords(s) {
    let reversedString = '';
    let word = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            // Prepend the word to the reversed string
            reversedString = word + ' ' + reversedString;
            word = '';
        } else {
            word += s[i];
        }
    }

    // Append the last word to the reversed string
    reversedString = word + ' ' + reversedString;

    // Remove the trailing space
    reversedString = reversedString.trim();

    return reversedString;
}

// Test the function
let s = "geeks quiz practice code";
let output = reverseWords(s);
console.log("Input:", s);
console.log("Output:", output);