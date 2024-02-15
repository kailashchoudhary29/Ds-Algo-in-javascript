const twoSum = (nums, target) => {
    const numToIndex = {};
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      // Check if the complement exists in the hash map.
      if (numToIndex.hasOwnProperty(complement)) {
        return [numToIndex[complement], i];
      }
  
      // Store the current number and its index in the hash map.
      numToIndex[nums[i]] = i;
    }
  
    // If no solution is found, return an empty array or handle it as needed.
    return [];
  };
  
  // Example usage:
  const nums = [2,11, 15,7];
  const target = 9;
  const result = twoSum(nums, target);
  console.log(result); // Output: [0, 1] (because nums[0] + nums[1] equals the target 9)
  