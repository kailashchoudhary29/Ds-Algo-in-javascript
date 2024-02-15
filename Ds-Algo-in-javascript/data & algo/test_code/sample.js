console.log("test");

/*
Problem : Target sum

Input Array = [1,6,7,5,9]

Target = 8

Op = [1,7]

*/

// console.log("find sum");

// const find_pair_sum = (array, sum) => {
//   let new_array = [];

//   for (let i = 0; i <= array.length; i++) {
//     for (let j = i+1; j <= array.length; j++) {
//       if (array[i] + array[j] == sum) {
//         new_array.push([array[i], array[j]]);
//       }
//     }
//   }
//   return  new_array
// };

// const output = find_pair_sum([1, 6, 7, 5, 9], 12);
// console.log(output)


/*

Problem : sum the number till it become single digit

Input number : 99

Output : 9


*/

const sumSingleDigit = (number) => {
    // Convert the number to a string
    const numberString = number.toString();
  
    let sum = 0;
  
    // Iterate over each character in the string
    for (let i = 0; i < numberString.length; i++) {
      const digit = parseInt(numberString[i]);
  
      // Check if the digit is a single-digit number
      if (digit >= 0 && digit <= 9) {
        sum += digit;
      }
    }
  
    return sum;
  };
  
  // Example usage
  console.log(sumSingleDigit(12345)); // Output: 15
  console.log(sumSingleDigit(987654321)); // Output: 45