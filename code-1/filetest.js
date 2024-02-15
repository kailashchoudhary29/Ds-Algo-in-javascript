// const reverseFunc = (getstring) => {
//   let temString = "";

//   let c = getstring.charAt(0);
//   temString = c + temString;
//   return temString;
// };

// var tString = "week";
// const outputreverse = reverseFunc(tString);
// console.log(outputreverse)

// const removedup = (arrData) => {
  //   let newSet = new Set();
  //   let newArray = [];

  //   for (let i = 0; i < arrData.length; i++) {
  //     if (newSet.has(arrData[i])) {

  //     } else {
  //       newSet.add(arrData[i]);
  //       newArray.push(arrData[i]);
  //     }
  //   }

//   //   return newArray;

//   let newobj = {};

//   for (let num of arrData) {
//     if (newobj[num]) {
//       newobj[num]++;
//     } else {
//       newobj[num] = 1;
//     }
//   }

//   console.log(newobj);

//   if(Object.values[newobj] >= 2){

//   }
// };

// var arr = [1, 2, 5, 7, 9, 9, 9, 9, 12, 12];
// const outputArray = removedup(arr);

// console.log(outputArray);







// const stockcheck = (array) =>{

//     // let buy = 0
//     let maxprofit= 0
//     for(let i =0;i<array.length-1;i++){
//         for(let j =i+1;j<array.length;j++){

//             maxprofit = array[j] -  array[i]
//         // if(){

//         // }
//         }
//     }
// return maxprofit
// }


// var array  = [7,4,8,1,3,5,4,9,10]
// const outputArray = stockcheck(array)
// console.log(outputArray)



// function findMaxProfit(prices) {
//     let maxProfit = 0;
//     let minPrice = Infinity;
  
//     for (let i = 0; i < prices.length; i++) {
//       if (prices[i] < minPrice) {
//         minPrice = prices[i];
//       } else if (prices[i] - minPrice > maxProfit) {
//         maxProfit = prices[i] - minPrice;
//       }
//     }
  
//     return maxProfit;
//   }
  
//   // Example usage
//   const stockPrices = [7,4,8,1,3,5,4,9,10]
//   const maxProfit = findMaxProfit(stockPrices);
//   console.log(maxProfit);


  function findMaxProfit(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;
  
    for (let i = 0; i < prices.length; i++) {
      minPrice = Math.min(minPrice, prices[i]);
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  
    return maxProfit;
  }
  
  // Example usage
  const stockPrices = [7,4,8,1,3,5,4,9,10]
  const maxProfit = findMaxProfit(stockPrices);
  console.log(maxProfit); 