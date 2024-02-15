//Kadane's Algorithm is an efficient algorithm to find the maximum subarray sum in an array of integers

function kadane(arr) {
    let maxEndingHere = 0; // maximum sum ending at the current position
    let maxSoFar = -Infinity; // maximum sum seen so far
  
    for (let i = 0; i < arr.length; i++) {
      maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
  
    return maxSoFar;
  }
  
  // Example usage
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const maxSum = kadane(arr);
  console.log(maxSum); // Output: 6