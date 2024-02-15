//max sum code



const maxSum = (arr) => {
  let maxSumNum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (j = i; j < arr.length; j++) {
      sum += arr[j];
      maxSumNum = Math.max(maxSumNum, sum);
    }
  }

  return maxSumNum;
};

const outputMaxSum = maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(outputMaxSum);

//kadane algo

const kadaneAlgo = (arr, N) => {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    let start = 0;
    let ansStart = 0;
    let ansEnd = 0;
   
  
    for (let i = 0; i < N; i++) {
      if (sum === 0) {
        start = i;
      }
      sum += arr[i];
  
      if (sum > max) {
        max = sum;
        ansStart = start;
        ansEnd = i;
      }
      if (sum < 0) {
        sum = 0;
      }
    }
    return { max, ansStart, ansEnd };
  };
  
  let sampleArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  let lenArr = sampleArr.length;
  const outputKadane = kadaneAlgo(sampleArr, lenArr);
  console.log(outputKadane.max, outputKadane.ansStart, outputKadane.ansEnd);
  
  // Print the elements with the maximum sum
  const maxSumSubarray = sampleArr.slice(outputKadane.ansStart, outputKadane.ansEnd + 1);
  console.log('Elements with the maximum sum:', maxSumSubarray);
  
  
