function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;
  let subarrayStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    //2, 1, 5, 1, 3, 2
    //0, 1, 2, 3, 4, 5
    //k=3
    if (windowEnd >= k - 1) {
      if (windowSum > maxSum) {
        maxSum = windowSum;
        subarrayStart = windowStart;
      }
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  const maxSubarray = arr.slice(subarrayStart, subarrayStart + k);
  return { maxSum, maxSubarray };
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
const { maxSum, maxSubarray } = maxSumSubarray(arr, k);
console.log(
  `The maximum sum subarray is [${maxSubarray}] with a sum of ${maxSum}.`
);
// Output: The maximum sum subarray is [5,1,3] with a sum of 9.
