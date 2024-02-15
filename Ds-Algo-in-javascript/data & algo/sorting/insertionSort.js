console.log("insertion sort");

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let numberToSort = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > numberToSort) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = numberToSort;
  }
  return array
};

const arr = [-6,20,8,-2,4];
insertionSort(arr);
console.log(arr);



