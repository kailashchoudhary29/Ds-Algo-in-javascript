//amagram string check






const amagramString = (str1,str2) =>{

    if(str1.length !== str2.length){
        return false
    }

    let count = {}


    for(let letter of str1){
        count[letter] = (count[letter] || 0)+1
    }
    // console.log(count)


    for(let lettercheck of str2){
        console.log(count[lettercheck])
        // console.log(count)
        if(!count[lettercheck]){
            console.log("kk")
            return false
        }
        count[lettercheck]--;
    }

    return true
}


const outputamagram =  amagramString('hello','llheo')

console.log(outputamagram)