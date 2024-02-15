//. Find the missing number from sorted array with O(n) complexity

const sortedMissing = (array) => {
  let missing = [];

  for (let i = 0; i <= array.length; i++) {
    if (!(array[i + 1] - array[i] == 1) && !(array[i + 1] == undefined)) {
      missing.push(array[i] + 1);
    }
  }

  return missing;
};

console.log(sortedMissing([1, 3, 4, 6, 7, 8, 10]));
