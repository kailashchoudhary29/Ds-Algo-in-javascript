//second largest elements

const secondLargestEle = (array) => {
  let sortArray = array.sort((a, b) => a - b);

  let res = sortArray[sortArray.length - 1];
  console.log(sortArray.length - 2 + ":::")

  for (let i = sortArray.length - 2; i >= 0; i--) {
    if (res != sortArray[i]) {
      res = sortArray[i];
      break;
    }

    // console.log(input)
  }
  return res;
};

const input = [1, 2, -2, 11, 7, 1];//-2,1,1,2,7,11
const output = 7;
const input1 = [1, 4, 7, 2, 4, 7];

const output1 = 4;

console.log(secondLargestEle(input));
console.log(secondLargestEle(input1));
