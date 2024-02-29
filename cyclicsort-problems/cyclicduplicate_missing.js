//[0...n] missing number cyclic sort

const cyclicDuplicateMissingNum = (arr) => {
    let i = 0;
    
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
        return [arr[index],index+1]
      }
    }
  
    return [-1,-1]
  };
  
  const outputCyclicSortDuplicateMissingAllNum = cyclicDuplicateMissingNum([1,2,2,4,5]);
  console.log(outputCyclicSortDuplicateMissingAllNum);
  