//two point single sum

const two_pointer_sum = (array, k) => {
  let windowsum = 0;
  let maxsum = 0;
  let start = 0;
  let end = 0;

  while (end < k) {
    windowsum = windowsum + array[end++];
  }

  while (end < array.length) {
    windowsum = windowsum + array[end++] - array[start++];
    maxsum = Math.max(maxsum, windowsum);
  }
  return maxsum;
};

let arry = [1, 9, -1, -2, 7, 3, -1, 2];
console.log(two_pointer_sum(arry, 4));
