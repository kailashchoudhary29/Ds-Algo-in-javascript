//second largest element

const findSecondLargest = (array) => {
  let largest = array[0];
  let secondLargest = -1;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] < largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }

    
  }
  return [largest,secondLargest];
};

const outputSecondLargest = findSecondLargest([1, 2, 3, 4, 7, 7, 6]);
console.log(outputSecondLargest);
