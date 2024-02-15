console.log("String count::")

/*
string = "aaabbca"-->a-4,b-2,c-1
*/

// const count = (str) => {
//     let freq = {};
//     for(let i = 0; i < str.length; i++) { // you can use for...of instead!
//       const currentLetter = str.charAt(i);
//       freq[currentLetter] = freq[currentLetter] + 1 || 1;
//     }
//     return freq;
//   }
// console.log(count("aaabcaabaab"));



function count(string) {
    let string1 = string.split("").sort().join("");
    console.log(string1)
    let counter = 1;
    for (let i = 0; i < string.length; i++) {
      if (string1[i] == string1[i + 1]) {
        counter++;
      } else {
        console.log(string1[i] + " " + counter);
        counter = 1;
      }
    }
  }
  count("aaaabcbbbaaabababaaacc");

// function count(string) {
//     return string.split("").reduce((acc, el) => {
//         if(acc.hasOwnProperty(el))
//           acc[el]++;
//         else
//           acc[el] = 1;
//         return acc;
//       }, {}
//         )
//   }
//   var data = count("aaaabcbbaa");
//   console.log(data);

  