//Find the missing number from unsorted array with O(n) complexity

const missingFunc = (array) => {
  let l = array.length;
  let sum = 1;

  for (let i = 2; i <= l + 1; i++) {
    sum = sum + i;
    sum = sum - array[i - 2];
    console.log(sum + '--->::')
  }
  return sum;
};
console.log(missingFunc([2, 7, 1, 5,8 , 6, 3,9]));
