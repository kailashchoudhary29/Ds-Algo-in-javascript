// console.log("RUN JS")

const { type } = require("os");

// const { test } = require("node:test")

// // s

// function name(){

// }
// const reverseName = (name) => {

//     let c;
//     let temString = ""

//     for(let i =0;i<name.length;i++){
//      c =  name.charAt(i)

//      temString = c + temString
//     }

//     return temString
// }

// const outputname = reverseName("Kailash")
// console.log(outputname)

//anna - > true
//Panos -> false

const palindromeText = (teststring) => {


//     // // const stringtest =  teststring.toString()
//     // console.log( typeof stringtest)
//   console.log(typeof teststring)
  if(typeof teststring === "number"){
    console.log('Dont pass number')
  }

let stringLen = teststring.length;


  for (let i = 0; i < stringLen / 2; i++) {
    if (teststring[i] !== teststring[stringLen - 1 - i]) {
      return false;
    }
  }

  return true;
};

const outputString = palindromeText(123);
console.log(outputString);


function isPalindromeNumber(number) {
  if (number < 0) {
    return false; // Negative numbers cannot be palindromes
  }

  let originalNumber = number;
  let reversedNumber = 0;

  while (number > 0) {
    const lastDigit = number % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    number = Math.floor(number / 10);
  }

  return originalNumber === reversedNumber;
}

// Example usage:
const num1 = 121;  // Palindrome number
const num2 = 123;  // Not a palindrome number

console.log(isPalindromeNumber(num1)); // Outputs: true
console.log(isPalindromeNumber(num2)); // Outputs: false

