const countCharacters = (str) => {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            if (charCount[str[i]]) {
                charCount[str[i]] += 1;
            } else {
                charCount[str[i]] = 1;
            }
        }
    }
    return charCount;
};

const sampleData = "welcome welcome";
const outputStr = countCharacters(sampleData);
console.log(outputStr);
