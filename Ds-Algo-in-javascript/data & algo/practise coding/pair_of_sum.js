console.log("practing array question!!")

//array[1,2,3,4....15] sum=12

const two_pair =(array,sum_pair) =>{
let new_array_pair = []
let length = array.length
// console.log(length)
    for(let i =0 ;i<length;i++){
        for(let j=1;j<=length;j++){
            for(let k=2;k<=length;k++){
            if(array[i] + array[j] +array[k] == sum_pair){
            new_array_pair.push([array[i],array[j],array[k]])
            }
        }
        }
    }
 console.log(new_array_pair)
}


const array_data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const total_sum_value = 15
two_pair(array_data,total_sum_value)