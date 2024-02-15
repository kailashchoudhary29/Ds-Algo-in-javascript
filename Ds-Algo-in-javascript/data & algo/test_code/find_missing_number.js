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
    // console.log(x2)
  }
  //console.log(x1,x2)
  return x1 ^ x2;
};

const data = [1, 2, 3, 5];
const len = data.length;
console.log(missing_number(data, len));



const findmissingnum = (num) =>{

  let n = num.length +1
  let expectsum = (n*(n+1))/2;
  let actualsum = num.reduce((sum,num) => sum+num,0)

  return expectsum - actualsum
}

const numberarray  =  [1,2,4]
const outputarraymissingnum = findmissingnum(numberarray)
console.log(outputarraymissingnum)


function sumOfSingleDigits(number) {
  // Convert the number to a string to iterate through its digits
  const numString =number.toString();
  
  // Initialize the sum
  let sum = 0;

  // Iterate through each digit and add it to the sum
  for (let digit of numString) {
      sum += parseInt(digit);
  }

  return sum;
}

// Example usage:
const exampleNumber = 12345;
const result = sumOfSingleDigits(exampleNumber);

console.log(`The sum of single digits in ${exampleNumber} is: ${result}`);