function decodeString(s) {
    let decodedString = "";
  
    while (s.includes("[")) {
      const startIndex = s.lastIndexOf("[");
      const endIndex = s.indexOf("]", startIndex);
  
      const repeatCount = parseInt(s.substring(startIndex - 1, startIndex));
      const repeatedString = s.substring(startIndex + 1, endIndex);
  
      const decodedSubstring = repeatedString.repeat(repeatCount);
      s = s.replace(`${repeatCount}[${repeatedString}]`, decodedSubstring);
    }
  
    decodedString = s;
  
    return decodedString;
  }
  
  const s = "3[a]2[bc]";
  const result = decodeString(s);
  console.log(result);



  // function decodeString(s) {
  //   const stack = [];
  //   let decodedString = "";
  
  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] === "]") {
  //       let encodedString = "";
  
  //       while (stack[stack.length - 1] !== "[") {
  //         encodedString = stack.pop() + encodedString;
  //       }
  //       stack.pop(); // Remove "[" from stack
  
  //       let repeatCount = "";
  //       while (!isNaN(stack[stack.length - 1])) {
  //         repeatCount = stack.pop() + repeatCount;
  //       }
  //       repeatCount = parseInt(repeatCount);
  
  //       const decodedSubstring = encodedString.repeat(repeatCount);
  //       stack.push(decodedSubstring);
  //     } else {
  //       stack.push(s[i]);
  //     }
  //   }
  
  //   decodedString = stack.join("");
  
  //   return decodedString;
  // }
  
  // const s = "3[a]2[bc]";
  // const result = decodeString(s);
  // console.log(result);
  