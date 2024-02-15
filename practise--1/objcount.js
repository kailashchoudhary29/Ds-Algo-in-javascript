//count word

const countword = (getStr) => {
    let obj = {};
  
    
    let splitChars = getStr.split('');
    console.log(splitChars)
  
  
    for (let letter of splitChars) {
     
      if (letter !== ' ') {
    
        if (!obj[letter]) {
          
          obj[letter] = 1;
        } else {
          
          obj[letter]++;
        }
      }
    }
  
    return obj;
  };
  
  const outputWordCount = countword("welcome welcome");
  console.log(outputWordCount);
  


  const countVowels = (str) => {
    // Define an object to store the count of each vowel
    let vowelCounts = {};
  
    // Convert the input string to lowercase to handle both uppercase and lowercase vowels
    str = str.toLowerCase();
  
    // Define an array containing all vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Iterate over each character in the string
    for (let char of str) {
      // Check if the character is a vowel
      if (vowels.includes(char)) {
        // Increment the count of the vowel in the object
        vowelCounts[char] = (vowelCounts[char] || 0) + 1;
      }
    }
  
    // Sort the vowel counts object by keys (vowels) in ascending order
    const sortedVowelCounts = {};
    Object.keys(vowelCounts).sort().forEach(key => {
      sortedVowelCounts[key] = vowelCounts[key];
    });
  
    return sortedVowelCounts;
  };
  
  const inputString = "This is a sample string to count vowels";
  const vowelCounts = countVowels(inputString);
  
  console.log(vowelCounts);
  