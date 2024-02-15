console.log("first adjacent occur number");

const adjacent_number = (array, target) => {
  if (array.length == 0) {
    return -1;
  }

  let start = 0;
  while (start < array.length) {
    if (array[start] == target) {
      return start;
    }
    let diff = Math.abs(array[start] - target);
    start = start + diff;
  }
  return -1;
};

console.log(adjacent_number([8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3], 2));
