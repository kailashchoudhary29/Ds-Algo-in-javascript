//larget array element in one array




const largetArrayEle = (array) =>{

    let largestElem = array[0]

    for(let i =1;i<array.length;i++){
        if(largestElem < array[i]){
            largestElem = array[i]
        }
    }
return largestElem
}

const outputEle = largetArrayEle([1,2,6,10,8,20])
console.log(outputEle)