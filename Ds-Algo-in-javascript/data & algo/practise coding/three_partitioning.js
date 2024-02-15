/***
 * 
 *n = 3 
A[] = {1, 2, 3}
[a, b] = [1, 3]
Output: 1
 */



const threeWayPartition = (array,n,a,b ) =>{

    var l,r;
    l = 0 ;
    r = n -1
    


    for(let i =0;i<r;i++){
        if(array[i] <a ){
            //swap
            //swap(array,l,r)
           
           temp = array[l]
            array[l] = array[r] 
            array[r] =temp
            l++
            i++
           // l++
        }

        else if(array[i] > b){
            temp = array[r]
            array[r] = array[i] 
            array[r] =temp
            r--
           
            //swap
            // swap(array,l,r)
            //  i--;
        }
       



}}
// const new_array =  []
//         for(let i = 0; i < array.length; i++)
//             console.log(new_array.push([array[i]]));
// }
//  let array1 = [9,5,7,1,4,6,3]
// three_part(array1,2,4)



let arr = [ 1, 14, 5, 20, 4, 2, 54,
    20, 87, 98, 3, 1, 32 ];
let n = arr.length;

threeWayPartition(arr, n, 10, 20);

let y = []
for(let i = 0; i < n; i++)
console.log(y.push(arr[i]) + " ");