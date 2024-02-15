//permutation tc= n! * n

function permutation(index, numArr, ansArray) {
  if (index === numArr.length) {
    ansArray.push(numArr);
    return;
  }

  for (let i = index; i < numArr.length; i++) {
    swap(numArr[index], numArr[i]);
    permutation(index + 1, numArr, ansArray);
    swap(numArr[index], numArr[i]);
  }
}

function swap(indexEle, arrayEle) {
  let temp;
  temp = indexEle;
  indexEle = arrayEle;
  arrayEle = temp;
}

let numArr = [1, 2, 3];
let ansArray = [];
permutation(0, numArr, ansArray);
console.log(ansArray);


//reverse the strin using recusion



const reverseStr = (str) =>{



  if(str === ''){
    return '';
  }
  else {
    const yy =  reverseStr(str.substr(1)) + str.charAt(0)
    console.log(yy+"  --->>>>")
  
    return reverseStr(str.substr(1)) + str.charAt(0);
}





}

const addStr = "hello"

const outputreverseStr =  reverseStr(addStr)
console.log(outputreverseStr)