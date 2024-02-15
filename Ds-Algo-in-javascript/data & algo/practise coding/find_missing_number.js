//find the missing number

const missing_number = (array, len) => {
  var x1 = array[0];
  var x2 = 1;
  // For xor of all the elements in array
  for (let i = 1; i < len; i++) {
    x1 = x1 ^ array[i];
  }
    // For xor of all the elements from 1 to n+1
  for (let i = 2; i <= len + 1; i++) {
    x2 = x2 ^ i;
    console.log(x2)
  }
  console.log(x1,x2)
  return x1 ^ x2;
};

const data = [1, 2, 3, 5];
const len = data.length;
console.log(missing_number(data, len));



//method --2


function findMissingNumber(array) {
  const n = array.length + 1; // Expected length of the array (including the missing number)
  const expectedSum = (n * (n + 1)) / 2; // Expected sum of consecutive numbers
  const actualSum = array.reduce((sum, num) => sum + num, 0); // Sum of numbers in the array
  const missingNumber = expectedSum - actualSum;
  return missingNumber;
}

const numbers = [1, 2, 3, 5, 6, 7, 8]; // Example array with a missing number
const missingNumber = findMissingNumber(numbers);
console.log('Missing number:', missingNumber);