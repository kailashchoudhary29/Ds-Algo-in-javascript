function compressString(s1) {
    const s = s1.split('').sort().join('')
    console.log(s)
    let compressed = '';
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++;
        } else {
        compressed += s[i] + count;
           count = 1;
        }
    }

    return compressed
}

// Example usage:
const exampleString = "aabcccccaaa";
const compressedString = compressString(exampleString);

console.log(`Original String: ${exampleString}`);
console.log(`Compressed String: ${compressedString}`);
