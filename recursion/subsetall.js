//subset all case

function generateSubset(index, sortArray, ds, outputArray) {
  outputArray.push(ds.slice());
  for (let i = index; i < sortArray.length; i++) {
    if (i !== index && sortArray[i] === sortArray[i - 1]) continue;
    ds.push(sortArray[i]);
    generateSubset(index + 1, sortArray, ds, outputArray);
    ds.pop();
  }
}


const sortArray = [1,2,2,2,3,3]
const len = sortArray.length
const outputArray = []
generateSubset(0,sortArray,[],outputArray)
console.log(outputArray)


// function generateSubset(index, sortArray, ds, outputArray) {
//   outputArray.push(ds.slice());
//   for (let i = index; i < sortArray.length; i++) {
//     if (i !== index && sortArray[i] === sortArray[i - 1]) continue;
//     ds.push(sortArray[i]);
//     generateSubset(i + 1, sortArray, ds, outputArray);
//     ds.pop();
//   }
// }
// const sortArray = [1, 2, 2, 2, 3, 3];
// const outputArray = [];
// generateSubset(0, sortArray, [], outputArray);
// console.log(outputArray);


