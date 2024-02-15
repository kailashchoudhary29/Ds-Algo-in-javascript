// //subset sum code in recursion




// function func(ind, sum, arr, N, sumSubset) {
//     if (ind === N) {
//         sumSubset.push(sum);
//         return;
//     }

//     // Pick the element
//     func(ind + 1, sum + arr[ind], arr, N, sumSubset);

//     // Do not pick the element
//     func(ind + 1, sum, arr, N, sumSubset);
// }

// function subsetSums(arr) {
//     let sumSubset = [];
//     func(0, 0, arr, arr.length, sumSubset);
//     sumSubset.sort((a, b) => a - b);
//     return sumSubset;
// }

// // Example usage
// let arr = [3, 1, 2];
// console.log(subsetSums(arr));


   



function subsetSum (index,sum,sumSubset,N,newAnsArray){

    if(index===N){
       return newAnsArray.push(sum)
        
    }

    subsetSum(index+1,sum+sumSubset[index],sumSubset,N,newAnsArray)
    subsetSum(index+1,sum,sumSubset,N,newAnsArray)

}



const sampleData = [3,1,2]
const sum = 0
const N = sampleData.length
const newAnsArray = []
subsetSum(0,sum,sampleData,N,newAnsArray)

console.log(newAnsArray)