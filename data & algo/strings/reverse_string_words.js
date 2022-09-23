console.log("reverse the string with words")


const reverse_string = (string) =>{


    let final_string  = ""
    let temp_string  = ""

    for(let i =0;i<string.length;i++){
        let c  = string.charAt(i)
        if(c == " "){
            console.log(temp_string)
            final_string = final_string + temp_string + " "
            temp_string = ""
        }
        else{
            temp_string = c  +  temp_string
        }
    }
    console.log(final_string)
    final_string = final_string + temp_string
    return final_string

}


console.log(reverse_string('hello world'))

