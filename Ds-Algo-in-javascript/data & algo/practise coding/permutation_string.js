// console.log("permutation")
// let str = 'let'
// let permutation =  (str,result) =>{
//     if(str.length == 0){
//         console.log(result)
//     }

//     for(let i =0;i<str.length;i++){
//         let rest = str.substring(0,i) + str.substring(i+1)
//         permutation(rest,result + str[i])
//         //permutation(rest)
//     }
// }
// permutation(str,'')

//string permutaiton using recursion

console.log("recursion string permutaion problem");

const permutation_string = (string, result) => {
  if (string.length == 0) {
    console.log(result);
  }

  for (let i = 0; i < string.length; i++) {
    let reset = string.substring(0, i) + string.substring(i + 1);
    console.log(reset)
    permutation_string(reset, result + string[i]);
  }
};

permutation_string("let", "");
