console.log("Chocolcate problem")

// Array  = [3, 4, 1, 9, 56, 7, 9, 12]  N = 8, M = 5
/**
 * find minimum chocalate
 * example 5 - person assign one packet chocolate
 * ex-- 3,4,1,9,56 ==min-1 and max =56
 *  calculation = max - min = 56 - 3 = 53 -- which not a minimum difference we are getting.
 *  assign - 1,3,4,7,9
 * 
 * 
 * 
 */


const chocolate_array = (arr,m,n) =>{
 

    let min_diff = Number.MAX_VALUE;
    arr.sort((a,b) => a-b)
   
    console.log(arr+"---")
    for(let i = 0; i + m - 1 < n; i++)
    {
        console.log( arr[i + m - 1]+"-data")
        let diff = arr[i + m - 1] - arr[i];
        console.log(diff+"---$$")
        console.log(min_diff+"--@@")
           
        if (diff < min_diff)
            min_diff = diff;
    }
    console.log(min_diff)
   // return min_diff;
}


 //[
//     1, 3,  4,  7,
//     9, 9, 12, 56 
//   ]

let arrayLen = 8
chocolate_array([3, 4, 1, 9, 56, 7, 9, 12],5,arrayLen)

