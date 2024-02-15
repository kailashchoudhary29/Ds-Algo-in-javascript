// // const sortArray = (arr1, arr2) => {
// //   let newArray = [];
// //   let s = new Set();
// //   for (let i = 0; i < arr1.length; i++) {
// //     for (let j = 0; j < arr2.length; j++) {

// //         newArray.push(arr1[i], arr2[j]);

// //     }
// //   }

// //   return newArray.sort();
// // };

// // var one = [1, 2, 3, 5];
// // var two = [5, 8, 4, 7];

// // const output = sortArray(one, two)
// // console.log(output)

// const joinArray = (mixArray) => {
//   let newArray = [];

 
//   const uniqueArr = [...new Set(mixArray)].sort();
//   console.log(uniqueArr)
// };

// // function removeDuplicates(arr) {
// //     return arr.filter((item,
// //         index) => arr.indexOf(item) === index);
// // }

// let array1 = [1, 5, 8, 3, 6];
// let array2 = [3, 6, 8, 9, 1, 4];
// let array3 = [...array1, ...array2];

// const outputArray = joinArray(array3);



function unionArrays(arr1, arr2) {
    const unionArr = [];
  
    // Add all elements from arr1 to unionArr
    for (let i = 0; i < arr1.length; i++) {
      if (!unionArr.includes(arr1[i])) {
        unionArr.push(arr1[i]);
      }
    }
  
    // Add elements from arr2 to unionArr if they are not already in it
    for (let j = 0; j < arr2.length; j++) {
      if (!unionArr.includes(arr2[j])) {
        unionArr.push(arr2[j]);
      }
    }
  
    return unionArr;
  }
  
  // Example usage
  const arr1 = [1, 2, 3,4];
  const arr2 = [2, 3, 4,5];
  
  const unionArr = unionArrays(arr1, arr2);
  console.log(unionArr); // Output: [1, 2, 3, 4]

  
  
  
  
  
  
  