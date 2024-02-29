//[0...n] missing number cyclic sort

const cyclicFirstMissingpositive = (arr) => {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] > 0 && arr[i]<arr.length && arr[i] !== i + 1) {
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

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] !== index + 1) {
          return index+1;
        }
      }
    return arr.length;
  };
  
  const outputCyclicSortDuplicateNum = cyclicFirstMissingpositive([-1,3,4,7]);
  console.log(outputCyclicSortDuplicateNum);
  