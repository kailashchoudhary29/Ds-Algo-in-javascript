//reduce


const array = [1,3,5,-7,6]


const sum = array.reduce((accumulator,currentvalue) =>{
    return accumulator + currentvalue
},0)

console.log(sum + ' ::::')