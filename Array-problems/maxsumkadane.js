function maxSubarraySum(arr, n) {
  let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    if (sum > maxi) {
      maxi = sum;
    }

    // If sum < 0: discard the sum calculated
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxi;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const n = arr.length;
const maxSum = maxSubarraySum(arr, n);
console.log("The maximum subarray sum is: " + maxSum);

// const findMaximumSubarray = (arr) => {
//     let maxSum = -Infinity;
//     let currentSum = 0;
//     let startIndex = 0;
//     let endIndex = -1;
//     let currentStartIndex = 0;

//     for (let i = 0; i < arr.length; i++) {
//       currentSum += arr[i];

//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//         startIndex = currentStartIndex;
//         endIndex = i;
//       }

//       if (currentSum < 0) {
//         currentSum = 0;
//         currentStartIndex = i + 1;
//       }
//     }

//     const maxSubarray = arr.slice(startIndex, endIndex + 1);
//     return { maxSum, maxSubarray };
//   };

//   // Example usage:
//   const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//   const { maxSum, maxSubarray } = findMaximumSubarray(arr);
//   console.log("Maximum Subarray Sum:", maxSum);
//   console.log("Maximum Subarray:", maxSubarray);
