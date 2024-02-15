//largest sum with k size

// const largestsum = (arr, num) => {
//   if (num > arr) {
//     throw new Error("num is not greater than array");
//   } else {
//     let maxsum = 0;

//     for (let i = 0; i < arr.length - num + 1; i++) {
//       let temp=0;
//       for (let j = 0; j < num; j++) {
//         temp += arr[i + j];
//       }
//       if (temp > maxsum) {
//         maxsum = temp;
//       }
//     }

//     return maxsum
//   }

// };

// const result = largestsum([1, 4, 5, 6, 7, 3, 7, 8, 9], 4);
// console.log(result);

const largestsum = (array, len) => {
  let maxsum = 0;

  for (let i = 0; i < array.length - len + 1; i++) {
    let temp = 0;
    for (let j = 0; j < len; j++) {
      temp += array[i + j];
    }
    if (temp > maxsum) {
      maxsum = temp;
    }

    
  }
  return maxsum;
};

const result = largestsum([2, 1, 5, 1, 3, 2], 3);
console.log(result);


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