// const array = [1,2,3,4,5]

// const sum = array.reduce((partialSum, a) => partialSum + a, 0);
// console.log(sum); // 6

console.log("unique elements")


const unique_ele = (array ) =>{
    let ans = 0;

    for(let i=0;i<=array.length;i++){
        ans  = ans ^ array[i]
    }
return ans
}

console.log(unique_ele([1,2,3,4,3,2,1]))