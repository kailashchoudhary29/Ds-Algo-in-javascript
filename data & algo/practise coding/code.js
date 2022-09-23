// const capitallize  = string =>{
//     const words = [];
//     for(let word of string.split(" ")){
//        words.push(word[0].toUpperCase() + word.slice(1))
//     }
//     console.log("word-->"+words)
//     return words.join(" ")
// }

// console.log(capitallize('hello world what are you doing'))
//capitalize




//remove duplicate

const  str = "tretre"

const remoeDup =  [...new Set(str.split(""))].join("")
console.log(remoeDup)

// duplicate remove

//reverse string
//str.split("").reverse().jon("")



// const reverse =  str =>{
//      let out  = ""

//      for(const c of str){
//        // console.log("c-->"+c)
//         out = c + out ;
//         console.log("c1-->"+out)
//      }
//      return out
// }

// console.log(reverse('hello'))

//remove duplicate one charactor

// const removeDup = (str,char) =>{
//     return str.split("").filter( i =>{
//         return i !== char
//     }).join("")
// }

// console.log(removeDup("hello",'e'))

//maximum

const mapOfString = str =>{
    const map = {};
    str.split("").forEach(i => map[i] = map[i] ? map[i] +1 : 1)
    return map
}

console.log(mapOfString("helloo"))


const reverse = string =>{
  const t =  string.split("").reverse().join("")
    return t;
}

console.log(reverse("welcome"))