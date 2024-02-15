//subarray with a given sum in JavaScript,

function findSubarrayWithSum(arr, sum) {
    let left = 0; // left pointer of the window
    let right = 0; // right pointer of the window
    let currentSum = 0; // sum of the current window
  
    while (right < arr.length) {
      // If the current sum is less than the given sum,
      // move the right pointer to the right and add the
      // element to the current sum.
      if (currentSum < sum) {
        currentSum += arr[right];
        //1, 2, 3, 4, 5
        //sum =9
        right++;
      }
      // If the current sum is greater than the given sum,
      // move the left pointer to the right and subtract the
      // element from the current sum.
      else if (currentSum > sum) {
        currentSum -= arr[left];
        left++;
      }
      // If the current sum is equal to the given sum, return
      // the subarray from left to right.
      else {
        return arr.slice(left, right);
      }
    }
  
    // If no subarray is found, return null.
    return null;
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const sum = 9;
  const subarray = findSubarrayWithSum(arr, sum);
  console.log(subarray); // Output: [2, 3, 4]