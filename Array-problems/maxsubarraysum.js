function getLongestSubarray(a, k) {
  let n = a.length; // size of the array

  let len = 0;
  for (let i = 0; i < n; i++) {
    // starting index
    for (let j = i; j < n; j++) {
      // ending index
      // add all the elements of subarray = a[i...j]
      let s = 0;
      for (let K = i; K <= j; K++) {
        s += a[K];
      }

      if (s === k) len = Math.max(len, j - i + 1);
    }
  }
  return len;
}

let a = [2, 3, 5, 1, 9, 2, 2, 2, 2, 2];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);

//using two pointer

// const getLongestSubarray = (array, k) => {
  
//   let right = 0;
//   let left = 0;
//   let maxlen = 0;
//   let sum = array[0];
//   let N = array.length;

//   while (right < N) {
//     while (left <= right && sum > k) {
//       sum -= array[left];
//       left++;
//     }
//     if(sum === k){
//       maxlen = Math.max(maxlen,right-left+1)    }
//     right++;
//     if (right < N) 
//     sum += array[right];
//   }
//   return maxlen;
// };

// let a = [2, 3, 5, 1, 9, 2, 2, 2, 2, 2];
// let k = 10;
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is:", len);
