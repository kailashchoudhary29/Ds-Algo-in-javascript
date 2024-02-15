// const revers_string = (string) => {
//   let temp = "";

// for (let i = 0; i < string.length; i++) {
// let c = string.charAt(i)
// temp = c +  temp
// }
// return temp
// };

// let test =revers_string("Test");

// console.log(test);



function differenceAndGroup(nums1, nums2) {
  const difference = nums1.filter((element) => !nums2.includes(element));
  const groupedDifference = nums2.filter((element) => !nums1.includes(element));
  
  console.log(difference,groupedDifference)
  
  return [difference, groupedDifference];
}

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const result = differenceAndGroup(nums1, nums2);
console.log(result);



// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);