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
    console.log(final_string + 'new')
    final_string = final_string + temp_string
    return final_string

}


console.log(reverse_string('hello world welcome'))




function reverseString(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
  }
  
  const input = 'Hello, World!';
  const reversed = reverseString(input);
  console.log('Reversed:', reversed);



//   function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  
//   const input = 'Hello, World!';
//   const reversed = reverseString(input);
//   console.log('Reversed:', reversed);