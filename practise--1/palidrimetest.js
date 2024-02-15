//palidrome code




const checkpalindrome = (str1) =>{

    let str1len = Math.floor(str1.length)


    for(let i=0;i<str1len;i++){
        if(str1[i] != str1[str1len-1-i]){
            return "not palidrome"
        }
    }
    return "palidrom"

}


const outputpalidrime = checkpalindrome("madam1")

console.log(outputpalidrime)


//anothe mothod 


let palidromStr = "madam1"


const checkPalidrim = palidromStr.split('').reverse().join('')
console.log(checkPalidrim === palidromStr)