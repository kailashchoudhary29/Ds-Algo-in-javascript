// var maximumSubArray = function(array) {
//     var ans = 0;
//     var sum = 0;

//     // console.log(ans, sum);
//     for (var i = 0; i < array.length; i++) {

//         ans = Math.max(0, ans + array[i]);
//         sum = Math.max(sum, ans);
//          console.log(ans, sum, array[i]);
//     }
//     //  console.log(ans, sum);
//     return sum;

// };

// maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);



// function maxSubarraySum(arr) {
//     let maxSoFar = arr[0];
//     let maxEndingHere = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
//       maxSoFar = Math.max(maxSoFar, maxEndingHere);
//     }
  
//     return maxSoFar;
//   }

//   const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const maxSum = maxSubarraySum(arr);
// console.log(maxSum); // Output: 6



function maxSubarraySum(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    let start = 0;
    let end = 0;
    let currentStart = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxEndingHere + arr[i]) {
        currentStart = i;
        maxEndingHere = arr[i];
      } else {
        maxEndingHere = maxEndingHere + arr[i];
      }
      if (maxEndingHere > maxSoFar) {
        maxSoFar = maxEndingHere;
        start = currentStart;
        end = i;
      }
    }
  
    return [maxSoFar, arr.slice(start, end + 1)];
  }


  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const [maxSum, subarray] = maxSubarraySum(arr);
console.log(maxSum); // Output: 6
console.log(subarray); // Output: [4, -1, 2, 1]