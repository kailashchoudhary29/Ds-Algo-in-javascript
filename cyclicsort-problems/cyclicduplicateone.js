//[0...n] missing number cyclic sort

const cyclicDuplicateNum = (arr) => {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] !== i + 1) {
      let rightIndex = arr[i] - 1;
      if (arr[i] !== arr[rightIndex]) {
        let temp = arr[i];
        arr[i] = arr[rightIndex];
        arr[rightIndex] = temp;
      } else {
        return arr[i];
      }
    } else {
      i++;
    }
  }
  return -1;
};

const outputCyclicSortDuplicateNum = cyclicDuplicateNum([1, 2, 3, 4, 4]);
console.log(outputCyclicSortDuplicateNum);
