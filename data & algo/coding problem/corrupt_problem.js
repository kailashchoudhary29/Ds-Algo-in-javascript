console.log("corrupt and find missing and duplicate number");

const corrupt = (array) => {
  let repeat = 0;
  let missing = 0;

  let i = 0;
  while (i < array.length) {
    if (array[i] != array[array[i] - 1]) {
      let otherIndex = array[i] - 1;

      let temp;
      temp = array[i];
      array[i] = array[otherIndex];
      array[otherIndex] = temp;
    } else {
      i++;
    }
  }
  for (i = 0; i < array.length; i++) {
    // If any element is not in its correct position
    if (array[i] != i + 1) {
      repeat = array[i];
      missing = i + 1;
      break;
    }
  }

  console.log("Repeating: " + repeat + "--Missing: " + missing);
};

corrupt([2, 3, 1, 5, 1]);
