console.log("Star print")
//  let n  = 5 
//  let string =  ""


//  for(let i = 0;i<n;i++){
//     for(j=0;j<n;j++){
//         string +='*'
//     }
//     string += '\n'
//  }

//  console.log(string)



let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);