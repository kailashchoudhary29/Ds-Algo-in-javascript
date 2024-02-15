// console.log("test");

// /*
// Problem : Target sum

// Input Array = [1,6,7,5,9]

// Target = 8

// Op = [1,7]

// */

// // console.log("find sum");

// // const find_pair_sum = (array, sum) => {
// //   let new_array = [];

// //   for (let i = 0; i <= array.length; i++) {
// //     for (let j = i+1; j <= array.length; j++) {
// //       if (array[i] + array[j] == sum) {
// //         new_array.push([array[i], array[j]]);
// //       }
// //     }
// //   }
// //   return  new_array
// // };

// // const output = find_pair_sum([1, 6, 7, 5, 9], 12);
// // console.log(output)


// /*

// Problem : sum the number till it become single digit

// Input number : 99

// Output : 9


// */

// const sum_single_digit = (number ) => {

// let i,j
//     while(number !== 0){
//     let divide_number = number %  10
//     let new_array = []
//     new_array.push(divide_number)
//    array = [4,4]
//     console.log(divide_number)
  
//     }
// }

// sum_single_digit(99)

//sss


// let n = 1234;
//Function to get sum of digits
function getSum(n) {
    let sum = 0;
    while (n > 0 || sum > 9) {
        //  if(n == 0) {
        //     n = sum;
        //     sum = 0;
        //  }
         sum = sum + n % 10;
         n = Math.floor(n / 10);
    }
    return sum;
}
//function call  

console.log(getSum(123))

