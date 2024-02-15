//four sum problems

const fourSum = (arr, target) => {
  arr.sort((a, b) => a - b);
  const result = [];

  let N = arr.length;
  for (let i = 0; i < N; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    for (j = i + 1; j < N; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;

      let left = j + 1;
      let right = N - 1;

      while (left < right) {
        let sum = arr[i] + arr[j] + arr[left] + arr[right];

        if (target === sum) {
          result.push([arr[i], arr[j], arr[left], arr[right]]);
          while (left < right && left[i] === left[i + 1]) left++;
          while (left < right && right[i] === right[i - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else right--;
      }
    }
  }
  return result;
};

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
const result = fourSum(nums, target);
console.log(result);
