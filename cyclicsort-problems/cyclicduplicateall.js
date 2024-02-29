//[0...n] missing number cyclic sort

const cyclicDuplicateAllNum = (arr) => {
  let i = 0;
  let result = [];
  while (i < arr.length) {
    let rightIndex = arr[i] - 1;
    if (arr[i] !== arr[rightIndex]) {
      let temp = arr[i];
      arr[i] = arr[rightIndex];
      arr[rightIndex] = temp;
    } else {
      i++;
    }
  }
  console.log(arr);
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== index + 1) {
      result.push(arr[index]);
    }
  }

  return result;
};

const outputCyclicSortDuplicateAllNum = cyclicDuplicateAllNum([1, 2, 3, 4, 4, 7, 8, 8,]);
console.log(outputCyclicSortDuplicateAllNum);
