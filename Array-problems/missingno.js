//missing number

const missingNumber = (arr) => {
  for (let i = 1; i <= arr.length; i++) {
    let flag = 0;
    for (let j = 0; j <arr.length-1 ; j++) {
      if (arr[j] == i) {
        flag = 1;
        break;
      }
    }

    if (flag == 0) {
      return i;
    }
  }
};

const outputMissNum = missingNumber([1, 2,3,4, 5,7]);
console.log(outputMissNum);






// function missingNumber(a, N) {
//     // Outer loop that runs from 1 to N:
//     for (let i = 1; i <= N; i++) {
//       // flag variable to check if an element exists
//       let flag = 0;
  
//       // Search the element using linear search:
//       for (let j = 0; j < N - 1; j++) {
//         if (a[j] === i) {
//           // i is present in the array:
//           flag = 1;
//           break;
//         }
//       }
  
//       // check if the element is missing (i.e., flag === 0):
//       if (flag === 0) {
//         return i;
//       }
//     }
  
//     // The following line will never execute.
//     // It is just to avoid warnings.
//     return -1;
//   }
  
//   function main() {
//     const N = 6;
//     const a = [1, 2,3,4,5,7];
//     const ans = missingNumber(a, N);
//     console.log("The missing number is:", ans);
//   }
  
//   main();
  




// function missingNumber(a, N) {
//     let xor1 = 0;
//     let xor2 = 0;
  
//     for (let i = 0; i < N - 1; i++) {
//       xor2 = xor2 ^ a[i]; // XOR of array elements
//       xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
//     }
//     xor1 = xor1 ^ N; // XOR up to [1...N]
  
//     return xor1 ^ xor2; // the missing number
//   }
  
//   function main() {
//     const N = 5;
//     const a = [1, 2, 4, 5];
//     const ans = missingNumber(a, N);
//     console.log("The missing number is:", ans);
//   }
  
//   main();
  
  
  