// console.log("min max array elements")

// //ARRAY[1,45,77,123]-- min=1 and max=123


// //solution--1
// let array = [1,45,77,123]
// console.log(Math.min(...array))
// console.log(Math.max(...array))

// //solution-2
// let array2 = [5,8,9,2,1123,34,5,777,1,9999]
// var a=  array2[0] - array2[1]
// console.log(a+"[[[---value---")
// const sorting = array2.sort((a,b) => a-b)
// let min = sorting[0]
// let max =  sorting[sorting.length -1]

// console.log(`${min}--value  and ${max}-value`)


// //understanding sort algo

// let a1 = [8,2,6,1]
// let sort1 =  a1.sort((a,b) => a-b)
// console.log(sort1)

// //reverse array 

// //Array [1,3,5,9] -- output == [9,5,3,1]


// const array_reverse = [1,3,5,9]
// //console.log(array_reverse.reverse())

// var back_length = array_reverse.length -1
// console.log(back_length+"--#")

// var new_reverse_ele = []
// for(let i = back_length ; i>-1;i--){
//   new_reverse_ele.push(array_reverse[i])
// }
// console.log(new_reverse_ele)


//sorting of array method--2
//aray -- [2,6,4,9,34,1]-->output--[1,2,4,6,9,34]

const sorting_two = array =>{
const my_new_sort = []
let temp =0;
    for(let i=0;i<array.length;i++){
        for(let j= 1;j<array.length ; j++){
            if(array[i]<array[j]){

                temp=array[i]
                array[i]=array[j]
                array[j]=temp
                my_new_sort.push(array[i])

            }
        }

    }
    return new_sort_array

}

const new_sort_array  = [2,6,4,9,34,1]

console.log(sorting_two(new_sort_array))