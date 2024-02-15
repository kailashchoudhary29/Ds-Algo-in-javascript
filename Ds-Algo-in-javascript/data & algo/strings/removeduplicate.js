function removeDuplicates( str) {
    var lhs = new Set();
    for (var i = 0; i < str.length; i++)
        lhs.add(str[i]);

    // print string after deleting duplicate elements
    for (var ch of lhs)
        console.log(ch);
}

/* Driver program to test removeDuplicates */
 
    var str = "geeksforgeeks";
    removeDuplicates(str);


    function removeDuplicates(str) {
        // Convert the string to an array of characters and use filter to keep only the first occurrence of each character
        const uniqueChars = str.split('').filter((char, index, array) => array.indexOf(char) === index);
        
        // Join the unique characters back into a string
        return uniqueChars.join('');
      }
      
      // Example usage:
      const inputString = 'hello world';
      const result = removeDuplicates(inputString);
      console.log(result);  // Output: 'helo wrd'
      



      function removeDuplicates(inputString) {
        let resultString = '';
      
        for (let i = 0; i < inputString.length; i++) {
          const currentChar = inputString[i];
      
          // Check if the character is not already present in the result string
          if (resultString.indexOf(currentChar) === -1) {
            resultString += currentChar;
          }
        }
      
        return resultString;
      }
      
      // Example usage:
      const input = 'hello world';
      const result = removeDuplicates(input);
      
      console.log(result); // Output: 'helo wrd'
      