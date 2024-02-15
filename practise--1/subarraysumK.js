// const findAllSubarraysWithGivenSum = (arr, k) => {
//     const n = arr.length; // size of the given array.
//     let cnt = 0; 
//     const subarrays = []; // Array to store subarrays

//     for (let i = 0 ; i < n; i++) { // starting index i
//         let sum = 0;
//         for (let j = i; j < n; j++) { // ending index j
         
//             sum += arr[j];

//             // Increase the count if sum == k:
//             if (sum === k) {
//                 cnt++;
//                 subarrays.push(arr.slice(i, j + 1)); 
//             }
//         }
//     }
//     return { cnt, subarrays };
// };

// // Example usage:
// const arr = [3, 1, 2, 4];
// const k = 6;
// const { cnt, subarrays } = findAllSubarraysWithGivenSum(arr, k);
// console.log("The number of subarrays is: " + cnt);
// console.log("Subarrays with sum " + k + ":");
// console.log(subarrays);




//positive and negative--get length

function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let left = 0, right = 0; // 2 pointers
    let sum = a[0];
    let maxLen = 0;
    while (right < n) {
        // if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k
        while (left <= right && sum > k) {
            sum -= a[left];
            left++;
        }

        // if sum = k, update the maxLen i.e. answer
        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        // Move forward the right pointer
        right++;
        if (right < n) sum += a[right];
    }

    return maxLen;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);



