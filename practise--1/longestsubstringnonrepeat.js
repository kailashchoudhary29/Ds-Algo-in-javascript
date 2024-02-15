function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // console.log(charIndexMap[currentChar])
        // console.log(charIndexMap)

        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }

        charIndexMap[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
const exampleString = "abcabwxyz";
const result = lengthOfLongestSubstring(exampleString);

console.log(`Length of the longest substring without repeating characters: ${result}`);
