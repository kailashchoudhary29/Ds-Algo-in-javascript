const { isGeneratorFunction } = require("util/types")


console.log('sum of two number')

const sum_two = (arr,target) =>{
    let sum_array = []
    for(let i=0;i<arr.length-1;i++){
        for(j=i;j<=arr.length-1;j++){
            if(arr[i]+ arr[j] == target){
                sum_array.push([arr[i],arr[j]])
            }
        }
    }
    return sum_array

}


console.log(sum_two([1,2,4,5,6],6))