// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct and list the numbers that are repeated
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true and repeated number is 1
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false and repeated number is null
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2,5,8]
// Output: true and repeated number is 1,2,3,4

const checkRepeatNumber = (array) => {
  //   let result = [];
  //   let count;

  //   for (let i = 0; i < array.length; i++) {
  //     for(let j= i+1;j<array.length;j++){
  //         if(array[i] === array[j]){

  //         }

  //     }
  //     // return false
  //   }

  //    return result;

  let obj = {};

  for (let num of array) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
   
  }

  console.log(obj)


 
};

// const outputRepeatNum = checkRepeatNumber([1, 2, 3, 1]);

// console.log(outputRepeatNum);

const outputRepeatNum = checkRepeatNumber([1, 1, 1, 3, 3, 4, 3, 2, 4, 2, 5, 8]);

console.log(outputRepeatNum);
