//insertion sort

const insertionsort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let numbersort = array[i];

    let j = i - 1;

    while (j >= 0 && array[j] > numbersort) {
      array[j + 1] = array[j];

      j = j - 1;
    }

    array[j + 1] = numbersort;
  }

  return array;
};

const outputinsertionsort = insertionsort([-2, 1, 4, 2, 7, 2, -9]);

console.log(outputinsertionsort);
