//reverse string




const reverseStr = (str1) =>{

//method
    // const reverseStrMethod = str1.split('').reverse().join('')
    // return reverseStrMethod

    //recursion

    // if(str1  === ''){
    //     return ''
    // }else{
    //     return reverseStr(str1.substr(1)) + str1.charAt(0);
    // }


    let temp_string = ""

    for(let i = 0;i<str1.length;i++){
        let c = str1.charAt(i)
        temp_string  = c + temp_string
    }
    return temp_string
}



const reverseStringouuptu = reverseStr('welcome')

console.log(reverseStringouuptu)