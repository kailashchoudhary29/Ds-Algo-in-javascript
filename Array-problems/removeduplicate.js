//duplicate remove



// const removeDuplicate = (arr )=>{

//     let i = 0;
//     for(let j = 1;j<arr.length;j++){
//         if(arr[i] != arr[j]){
//             arr[i+1] = arr[j];
//             i++
//         }
//     }
// return i+1
// }


// const outputRmDuplicate = removeDuplicate([1,1,1,2,2,3,3,3])
// console.log(outputRmDuplicate)

function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        console.log(uniqueArray.includes(arr[i]))
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  
  const inputArray = [1, 1, 1, 2, 2, 3, 3, 3];
  const resultArray = removeDuplicates(inputArray);
  console.log(resultArray);

  
//   //function removeDuplicates(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   // Sort the array to group duplicates together
//   arr.sort((a, b) => a - b);

//   // Initialize two pointers
//   let left = 0;
//   let right = 1;

//   // Iterate through the array with the right pointer
//   while (right < arr.length) {
//     if (arr[left] === arr[right]) {
//       // If the elements are the same, move the right pointer
//       right++;
//     } else {
//       // If the elements are different, replace the next element at the left pointer
//       // with the different element, then move both pointers
//       left++;
//       arr[left] = arr[right];
//       right++;
//     }
//   }

//   // Return the unique portion of the array
//   return arr.slice(0, left + 1);
// }

// const inputArray = [1, 1, 1, 2, 2, 3, 3, 3];
// const resultArray = removeDuplicates(inputArray);
// console.log(resultArray);
