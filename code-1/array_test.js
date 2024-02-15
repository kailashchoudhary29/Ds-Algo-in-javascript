// // // Input: nums1 = [1,2,3], nums2 = [2,4,6]
// // // Output: [[1,3],[4,6]]




// // const distinct_array = (array1,array2) =>{


// //     const arraySet1 = new Set([...array1])
// //     console.log(arraySet1)
    
// //     const arraySet2 = new Set([...array2])
// // console.log(arraySet2)
   
// // const t  = arraySet1.has(arraySet2)
// // console.log(t+ " uni")
  


   
    
// // }

// // const array1 = [1,2,3]
// // const array2 =[2,4,6]

// // const output = distinct_array(array1,array2)


// // //first convert arra1-array2 to set
// // //find unique in between set3=set1-set2
// // //remove unquie set1-set3 and set2-set3 




// //arr = [1,2,2,1,1,3]
// //1-3,2-2,3-1


// const occurEle  = (array) =>{

//     let new_obj= {}


//     for( let number of array){
//         if( ! new_obj[number]){
//             new_obj[number] = 1
//         }
//         else{
//             new_obj[number]++
//         }
//     }
//      console.log(new_obj)
//     return Object.values(new_obj)

// }



// // const passArray =  occurEle([1,2,2,1,1,3])
// const passArray =  occurEle([-1,-4,-4,-4,-3,0,1,-3,1,1,1,-3,10,0,-5])
// console.log(passArray)




// function difference(arr1, arr2) {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
//     return [...arr1.filter((element) => !set2.has(element)), ...arr2.filter((element) => !set1.has(element))];
//   }
  
//   const array1 = [1, 2, 3];
//   const array2 = [2, 4, 5];
//   const result = difference(array1, array2);
//   console.log(result);


  // function difference(arr1, arr2) {
  //   return arr1.filter((element) => !arr2.includes(element));
  // }
  
  // const array1 = [1, 2, 3, 4, 5];
  // const array2 = [3, 4, 5, 6, 7];
  // const result = difference(array1, array2);
  // console.log(result);



  function differenceAndGroup(nums1, nums2) {
    const difference = nums1.filter((element) => !nums2.includes(element));
    console.log(difference)
    const groupedDifference = nums2.filter((element) => !nums1.includes(element));
    console.log(groupedDifference)
    
    return [difference, groupedDifference];
  }
  
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  const result = differenceAndGroup(nums1, nums2);
  console.log(result);


  // function containsDuplicate(arr) {
  //   const uniqueElements = new Set(arr);
  //   return uniqueElements.size !== arr.length;
  // }
  
  // const arr = [1, 2, 2, 1, 1, 3];
  // const result = containsDuplicate(arr);
  // console.log(result);