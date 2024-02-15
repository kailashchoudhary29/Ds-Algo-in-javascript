console.log("Triplet the sum:");

const triplet = (array, sum) => {
  let new_array = [];
  let array_sort = array.sort((a, b) => a - b);
  console.log(array_sort);
  let left;
  let right;
  for (let i = 0; i < array_sort.length - 2; i++) {
    let sum1 = sum - array_sort[i];
    // console.log(sum1);
    left = i + 1;
    right = array_sort.length - 1;

    while (left < right) {
      let t = array_sort[left] + array_sort[right];
      // console.log(t + "$");

      if (t == sum1) {
        new_array.push([array_sort[left], array_sort[right], array_sort[i]]);
        left++;
        right--;
      } else if (t < sum1) {
        left++;
      } else {
        right--;
      }
    }
  }
  console.log(new_array);
};

triplet([1, 2, -3, 4, -2, -1], 1);
