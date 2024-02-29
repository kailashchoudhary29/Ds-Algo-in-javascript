//[0...n] missing number cyclic sort

const cyclicMissing = (arr) => {
  let i = 0;
  let result = [];
  while (i < arr.length) {
    let rightIndex = arr[i] -1 ; 
    //i==once when 0 start and 1 start i=i+1
    if (arr[i] !== arr[rightIndex]) {
    // if (arr[i] < arr.length && arr[i] != i+1) {
      //1 start
      let temp = arr[i];
      arr[i] = arr[rightIndex];
      arr[rightIndex] = temp;
    } else {
      i++;
    }
  }
  console.log(arr);
  for (let index = 0; index < arr.length; index++) {
    //0....n
    // if(arr[index] != index){
    //     return index
    // }
    //1...n
    if (arr[index] !== index + 1) {
      result.push(index+1);
    }
  }
return result
  
//   return arr.length; for length
};

const outputCyclicSortMissingNum = cyclicMissing([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(outputCyclicSortMissingNum);
