//cyclic sort only for 1...n number present

const cyclicSort = (arr) => {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] != i + 1) {
      let rightIndex = arr[i] - 1;
      let temp =   arr[i];
      
      arr[i] = arr[rightIndex];
      arr[rightIndex] = temp;
    } else {
      i++;
    }
  }

  return arr;
};

const outputCyclicSort = cyclicSort([3, 4, 2, 1, 5]);
console.log(outputCyclicSort);
