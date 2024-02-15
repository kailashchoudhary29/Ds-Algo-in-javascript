//You have an array of numbers.
//Your task is to sort ascending odd numbers but even numbers must be on their places. Zero isn't an odd number and you don't need to move it.
//If you have an empty array, you need to return it.
//How would you write unit test for this method?
//What would you use as an assertion library?

// sortArray([5, 3, 2, 8, 1, 4])

//[1, 3, 2, 8, 5, 4]

// const sortArray = (array) => {
//   let oddNumberSort = [];

//   if (array.length == 0) {
//     return 1;
//   }

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       oddNumberSort.push(array[i]);
//     } else if (array[i] % 2 != 0) {
//       oddNumberSort.push(array[i]);
     

//     }
//   }
//   return [...oddNumberSort];
// };

// const outputarray = sortArray([5, 3, 2, 8, 1, 4]);
// console.log(outputarray);


//[1, 3, 2, 8, 5, 4]


const sortArray = (array) => {
  let oddNumbers = array.filter(num => num % 2 !== 0);
  oddNumbers.sort((a, b) => a - b);
console.log(oddNumbers)
console.log(oddNumbers.shift()+":::;;")
  // Map the sorted odd numbers back into their original positions
  return array.map(num => (num % 2 !== 0 ? oddNumbers.shift() : num));
};

const outputArray = sortArray([5, 3, 2, 8, 1, 4]);
console.log(outputArray); // Output: [1, 3, 2, 8, 5, 4]


// function sortArray(array) {
//   // Extract the odd numbers and sort them
//   const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  
//   // Create a new array with the sorted odd numbers placed back into their original positions
//   const sortedArray = array.map(num => (num % 2 !== 0 ? oddNumbers.shift() : num));
  
//   return sortedArray;
// }

// // Example usage:
// const inputArray = [5, 3, 2, 8, 1, 4];
// const sortedArray = sortArray(inputArray);
// console.log(sortedArray); // Output: [1, 3, 2, 8, 5, 4]
