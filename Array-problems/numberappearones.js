//cnumber appear once



const numberAppearonce =  (array) =>{

    for(let i = 0 ;i< array.length ;i++){
        let count =0;
       let num = array[i]
        for(let j = 0;j<array.length;j++){
            if(array[j] == num){
                count++
            }
        }
        if(count == 1){
            return num
        }
    }

}



const outputnumberAppearOnce = numberAppearonce([1,1,2,2,3,3,4,4,5])
console.log(outputnumberAppearOnce)