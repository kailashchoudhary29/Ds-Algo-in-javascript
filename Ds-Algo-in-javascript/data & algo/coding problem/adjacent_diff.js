console.log("adjacent the difference number");

const adjacent_number = (array, k, target) => {
  if (array.length == 0) {
    return -1;
  }

  let start = 0;

  while (start < array.length) {
    if (array[start] == target) {
      return start;
    }
    let diff = Math.abs(array[start] - target) / k;
    diff = Math.floor(diff);
    diff = Math.max(1, diff);
    start = start + diff;
  }
  return -1;
};

console.log(adjacent_number([70, 70, 60, 80, 90, 110, 130, 150], 20, 80));
