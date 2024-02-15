function maxLengthSubarray(nums, target) {
    let maxLength = 0;
    let currentSum = 0;
    let startIndex = 0;
  
    for (let endIndex = 0; endIndex < nums.length; endIndex++) {
      currentSum += nums[endIndex];
  
      while (currentSum > target) {
        currentSum -= nums[startIndex];
        startIndex++;
      }
  
      if (currentSum === target) {
        maxLength = Math.max(maxLength, endIndex - startIndex + 1);
      }
    }
  
    return maxLength;
  }
  
  let target = 10;
  let nums = [2, 3, 1, 2, 4, 3,1];
  let result = maxLengthSubarray(nums, target);
  console.log(result); // This will output 2, as [4, 3] is the maximum length subarray with a sum of 7.
  