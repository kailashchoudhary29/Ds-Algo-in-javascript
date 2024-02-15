// //Sliding Window Maximum (Maximum of all subarrays of size K)
// // JavaScript Program to find the maximum for
// // each and every contiguous subarray of size k.

// // Method to find the maximum for each
// // and every contiguous subarray of size k.
// function printKMax(arr,n,k)
// {
//     let j, max;

//     for (let i = 0; i <= n - k; i++)
//     {
//         max = arr[i];

//         for (j = 1; j < k; j++)
//         {
//             if (arr[i + j] > max)
//                 max = arr[i + j];
//         }
//          console.log( max + " ");
//     }
// }

// Driver code

// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// let n =arr.length;
// let k = 3;
// printKMax(arr, n, k);

// function maxSlidingWindow(nums, k) {
//   const result = [];
//   const deque = []; // deque stores indices of elements

//   for (let i = 0; i < nums.length; i++) {
//     // remove elements from the front of deque if they are out of the current window
//     if (deque.length > 0 && deque[0] < i - k + 1) {
//         //1, 3, -1, -3, 5, 3, 6, 7
//       deque.shift();
//     }

//     // remove elements from the back of deque if they are smaller than the current element
//     while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
//       deque.pop();
//     }

//     // add the current index to the back of deque
//     deque.push(i);

//     // add the maximum element in the current window to the result
//     if (i >= k - 1) {
//       result.push(nums[deque[0]]);
//     }
//   }

//   return result;
// }

// // Example usage:
// const nums = [1, 3, -1, -3, 5, 3, 6, 7];
// const k = 3;
// const maxSubarrays = maxSlidingWindow(nums, k);
// console.log(maxSubarrays); // Output: [3, 3, 5, 5, 6, 7]
// //   This implementation takes an array of integers nums and an integer k, and returns an array of the maximum elements of all subarrays of size k in nums, using a sliding window approach. The function uses a deque (double-ended queue) to store the indices of the elements in the current window.

// //   The function iterates through nums and, for each element, removes elements from the front of the deque if they are out of the current window, removes elements from the back of the deque if they are smaller than the current element, adds the current index to the back of the deque, and adds the maximum element in the current window to the result if the window size is at least k.

// //   In the example usage, nums is set to [1, 3, -1, -3, 5, 3, 6, 7] and k is set to 3, so the function finds the maximum elements of all subarrays of size 3 in nums, which are [3, 3, 5, 5, 6, 7]. The output is [3, 3, 5, 5, 6, 7].
