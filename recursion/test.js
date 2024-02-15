//recusrsion sum



//with parameter

const recursionSum = (N,totalSum) =>{

    if(N < 1){
        return totalSum
    }
 return recursionSum(N-1,totalSum+N)
}


let sum = 0
const outputSum = recursionSum(3,sum)
console.log(outputSum)


//method --2 with function returh



const recursionReturnSum = (N) =>{

   if(N==0){
    return 0
   }
return N + recursionReturnSum(N-1)
}



const outputReturnSum = recursionReturnSum(3)
console.log(outputReturnSum)



//method--3


const recursionReturnMulSum = (N) =>{

    if(N===0){
     return 1
    }
 return N * recursionReturnMulSum(N-1)
 }
 
 
 
 const outputReturnSumMul = recursionReturnMulSum(3)
 console.log(outputReturnSumMul)