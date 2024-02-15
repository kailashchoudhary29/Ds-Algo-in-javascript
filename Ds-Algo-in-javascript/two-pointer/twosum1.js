//two sum pointer code

const { resourceUsage } = require("process");

// const two_pointer = (array, target) => {
//   // console.log(array,target)
//   let start = 0;
//   let end = array.length - 1;
//   let result = [];

//   while (start < end) {
//     let sum = array[start] + array[end];
//     if (sum === target) {
//       return [start,end]

//     } else if (sum < target) {
//       start++;
//     } else {
//       end--;
//     }

//   }
//   return [-1,-1]
// };

// let array = [-3, 2, 3, 3, 6, 8, 15];

// console.log(two_pointer(array, 6));

// const twopointersum = (array, sum) => {
//   let left = 0;
//   let right = array.length - 1;

//   while (left < right) {
//     let target = array[left] + array[right];

//     if (sum === target) {
//       return [array[left], array[right]];
//     } else if (sum > target) {
//       left++;
//     } else {
//       right--;
//     }

    
//   }
//   return [-1,-1];
// };

// let array = [-3, 2, 3, 3, 6, 8, 15];
//sort array





const twopointersum = (array,sum  ) =>{

  let left = 0;
  let right =array.length

  while(left< right){
    let target = array[left] + array[right]

    if(sum == target){
      return [array[left],array[right]]
    }

    else if(sum > target){
left++
    }
    else{
      right--
    }
  }

  return [-1,-1]
}



let array = [-3, -2, 3, 6, 8, 15];

const yy = twopointersum(array, 14);
console.log(yy);