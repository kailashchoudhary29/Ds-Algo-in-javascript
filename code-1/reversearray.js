console.log("Reverse the array");

//method--1
// const reverse_array = (arr) => {
//   //code
//   let start = 0;
//   let end = arr.length - 1;
//   let swap;

//   while (start <= end) {
//     swap = arr[start];
//     arr[start] = arr[end];
//     arr[end] = swap;
//     start++;
//     end--;
//   }
//   console.log(arr + " big of n");
// };

// reverse_array([1, 2, 3, 4, 5]);

//method--2

const reverse_array2 = (arr) => {
  let arr_reverse = [];
   let len = arr.length
   console.log(len + ' ---')

//   for (let i = 0; i < arr.length; i++) {
  for (let i = 0; i < len; i++) {
    arr_reverse.push(arr.pop());
  }
  return arr_reverse;
};

console.log(reverse_array2([1,2,3,4,5,6,7]));

// function reverse(array){
//     var output = [];
//     var len = array.length;
//     for (var i = 0; i< len; i++){
//         output.push(array.pop());
//     }

//     return output;
// }

// console.log(reverse([1,2,3,4,5,6,7]));
