// console.log("pair sum practise")

// const pair_sum =  ( array,sum) =>{
// const output_array = []
//     for(let i = 0;i<=array.length ;i++){
//         for(let j = 1;j<=array.length;j++){
//             if(array[i] + array[j] == sum){

//                 output_array.push([array[i],array[j]])
//             }
//         }
//     }
//     console.log(output_array)

// }

// pair_sum([0, -1, 2, -3, 1],-2)

//count char after tha print string

// console.log('count-string after char')

// const count_string = (string,char,count) =>{

//     var occurence = 0,i;
//     if(count == 0){
//         console.log(string)
//     }

//     for( i =0;i<=string.length;i++){
//         if(string.charAt(i) == char ){
//             occurence++;
//         }

//         if(occurence == count){
//         break;
//     }}
// // console.log(string.length -1)
//     if(i < string.length -1){
//         console.log(string.substring(i+1))
//     }
//     else{
//         console.log('empty string')
//     }

// }

// let str = 'geeks for geeks'
// count_string(str, 'e', 2)

//count inversion

// console.log("count inversion")

// const count_inversion = (array) =>{

//     let count = 0 ;
//     let new_array = []

//     for(let i =0;i<=array.length - 1; i++){
//         for(let j =i+1 ;j<=array.length ; j++){
//             if(array[i] > array[j])
//             count++;
//             //console.log(new_array.push([array[i],array[j]]))
//         }
//     }
//     return count

// }

// console.log(count_inversion([1, 20, 6, 4, 5]))

//stock buy and sell

console.log("stock buy and sell");

// const stock_pro = (array) => {
//   let minSoFar = array[0];
//   let maxPro = 0;

//   for (let i = 0; i <= array.length; i++) {
//     minSoFar = Math.min(minSoFar, array[i]);
//     let profit = array[i] - minSoFar;

//     maxPro = Math.max(maxPro, profit);
//   }
//   return maxPro;
// };

// let p = stock_pro([5, 2, 6, 1, 4]);
// console.log(p);



const stock_pro = (array) => {
  if (array.length <= 1) {
    return 0; // If the array has less than 2 elements, no profit can be made
  }

  let minSoFar = array[0];
  let maxPro = 0;

  for (let i = 1; i < array.length; i++) { // Corrected the loop condition
    minSoFar = Math.min(minSoFar, array[i]);
    let profit = array[i] - minSoFar;
    maxPro = Math.max(maxPro, profit);
  }
  
  return maxPro;
};

let p = stock_pro([5, 2, 6, 1, 4]);
console.log(p); // Output: 4 (buy at 2, sell at 6)
