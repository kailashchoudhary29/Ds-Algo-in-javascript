console.log("minimum index distance")

/**
 * N = 7
A[] = {86,39,90,67,84,66,62}
x = 42, y = 12
 */

// const min_index_distance = (array,a,b) =>{
//     let prev = -1
//     let max_int = Number.MAX_VALUE
//     for(let i=0;i<array.length-1;i++){
//         if(array[i] ==a && array[i] == b){
//             if(prev != -1 && a[prev] != a[i] ){
//                 max_int = Math.min(max_int,i-prev)
//             }
//             prev-i
//         }
//         return max_int = Number.MAX_VALUE ? -1 : max_int
//     }

// }

// console.log(min_index_distance([1,2,3,2],1,2))



function findMin(arr,a,b){
	var firstIndex = arr.indexOf(a);
  console.log(firstIndex);
  
  var lastIndex = arr.indexOf(b);
  console.log(lastIndex);
  
  var minDistance;
  
  if(firstIndex===lastIndex){
  		minDistance = 1;
  }
  if(firstIndex<lastIndex){
  		minDistance = lastIndex-firstIndex;
  }
	return minDistance;
}

 console.log(findMin([1,2,3,2,5,8,9,8,2,1,9], 2,  8));