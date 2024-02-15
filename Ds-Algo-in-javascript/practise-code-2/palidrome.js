const checkpalidrome = (string ) =>{
    
    
    let strlen = Math.floor(string.length)
    console.log(strlen/2)
    console.log(strlen)
    for(let i = 0;i<strlen/2;i++){
        if(string[i] !== string[strlen-1-i]){
            return "not palidrome"
        }
    }
    
    return "palindrome given string"
     
 }
 
 
 var s = "abccba"
 const output =  checkpalidrome(s)
 console.log(output)
