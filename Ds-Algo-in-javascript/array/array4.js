//"leaders in an array" coding problem in JavaScript

function findLeaders(nums) {
    const leaders = [];
    let currentLeader = nums[nums.length - 1];
    leaders.push(currentLeader);
  
    for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] > currentLeader) {
        currentLeader = nums[i];
        leaders.push(currentLeader);
      }
    }
  
    return leaders.reverse();
  }
  
  // Example usage:
  const nums = [16, 17, 4, 3, 5, 2];
  const leaders = findLeaders(nums);
  console.log(leaders); // Output: [17, 5, 2]