

const removeDuplicateStr = (str )=>{


    const uniqueStr = new Set()

for(let i=0;i<str.length;i++){
    uniqueStr.add(str[i])
}

for(let ch of uniqueStr){
    console.log(ch)
}
}


const outputremoveDuplicate = removeDuplicateStr('welooomee')

console.log(outputremoveDuplicate)