function maxSubarrayOfSizeK(arr, k) {
  const result = [];
  let left = 0,
    right = 0,
    max = -Infinity;

  while (right < arr.length) {
    max = Math.max(max, arr[right]);
    if (right - left + 1 === k) {
      result.push(max);
      max = -Infinity;
      left++;
    }
    right++;
  }
  return result;
}

const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

const result = maxSubarrayOfSizeK(arr, k);
console.log(result); // [3, 3, 5, 5, 6, 7]

function maxSubArray(arr, k) {
  const result = [];

  for (let i = 0; i < arr.length - k + 1; i++) {
    let max = arr[i];

    for (let j = i + 1; j < i + k; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }

    result.push(max);
  }

  return result;
}

// Example usage:
const arr1 = [1, 3, -1, -3, 5, 3, 6, 7];
const k1 = 3;
const maxArr = maxSubArray(arr1, k1);
console.log(maxArr); // Output: [3, 3, 5, 5, 6, 7]
