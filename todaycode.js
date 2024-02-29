

const reverseWords = (wordStr) => {
  let len = wordStr.length;
  let s2 = "";

  for (let i = wordStr.length - 1; i >= 0; i--) {
      if (wordStr[i] === ' ') {
        let wordLen  = len - i
        len = i - 1;
         s2 =  s2.concat(wordStr.substr(i + 1, wordLen) );
          s2 =  s2.concat(' ')
          
      }
  }

  s2 = s2.concat(wordStr.substr(0, len + 1));
  return s2;
}

let s = "geeks quiz practice code";
let output = reverseWords(s);
console.log(output);

// console.log("Input:", s);
// console.log("Output:", output);



// const reverseWords = (wordStr) =>{
// let len = wordStr.length
// let s2 = ""
//   for(let i = wordStr.length -1;i>=0;i--){
//     if(wordStr[i] == ' '){
//       let = len - i
//       len = i- 1;
//       s2.concat(wordStr.substr(i+1,r))
//     }
//   }

//   s2.const(wordStr.substr(0,len +1))
// }